"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { StepsNavigation } from "./StepsNavigation";
import userInfoStepsStore from "@/stores/userInfoStepsStore";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserInfoSchema, userInfoSchema } from "@/validators/userInfoSchema";
import { Form } from "@/components/ui/Form";
import { ContactInfoStep } from "./ContactInfoStep";
import { ClubInformationStep } from "./ClubInformationStep";
import { SummaryStep } from "./SummaryStep";
import { doc, setDoc } from "firebase/firestore";
import { authentication, db } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useDocument } from "react-firebase-hooks/firestore";
import { useEffect, useState } from "react";
import { FirebaseUserDoc } from "@/types/User";
import userInfoStore from "@/stores/userInfoStore";

type StepsContainerProps = {};

function AddUserInfo({}: StepsContainerProps) {
  const { setUser } = userInfoStore();
  const { currentStep, setIsUploadingData } = userInfoStepsStore();
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [auth, isLoading] = useAuthState(authentication);

  const userDocRef = doc(db, `users/${auth?.uid}`);
  const [userDoc, userDocIsLoading] = useDocument(userDocRef);
  const userDocData = userDoc?.data() as FirebaseUserDoc; // todo fix type

  const userInfoForm = useForm<UserInfoSchema>({
    resolver: zodResolver(userInfoSchema),
  });

  const { handleSubmit, reset } = userInfoForm;

  async function onSubmit(data: UserInfoSchema) {
    try {
      setIsUploadingData(true);
      if (!auth || isLoading) throw new Error("User is not authenticated");

      userInfoSchema.parse(data);

      await setDoc(userDocRef, { contactInfo: data }, { merge: true });

      setUser(data);

      setIsOpen(false);
    } catch (error) {
      console.error(error);
    } finally {
      setIsUploadingData(false);
    }
  }

  useEffect(() => {
    const contactInfo = userDocData?.contactInfo;
    setUser(contactInfo);
    reset({
      name: contactInfo?.name ?? "",
      contactEmail: contactInfo?.contactEmail ?? "",
      phone: contactInfo?.phone ?? "",
      country: contactInfo?.country ?? "",
      organization: {
        club: contactInfo?.organization?.club ?? "",
        federation: contactInfo?.organization?.federation ?? "",
      },
    });
  }, [userDocIsLoading]);

  useEffect(() => {
    if (auth && userDocData) {
      const parsedData = userInfoSchema.safeParse(userDocData.contactInfo);
      parsedData.success ? setIsOpen(false) : setIsOpen(true);
    }
  }, [auth, userDocData]);

  const stepComponent: Record<string, React.ReactNode> = {
    1: <ContactInfoStep form={userInfoForm} />,
    2: <ClubInformationStep form={userInfoForm} />,
    3: <SummaryStep form={userInfoForm} />,
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent showClose={false}>
        <DialogHeader>
          <DialogTitle>User information</DialogTitle>
          <DialogDescription>
            It seems that we&apos;re missing some information about you. Please
            fill out the form
          </DialogDescription>
        </DialogHeader>
        <Form {...userInfoForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <StepsNavigation>{stepComponent[currentStep]}</StepsNavigation>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export default AddUserInfo;
