import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Form } from "@/components/ui/Form";
import { Athlete, athleteSchema } from "@/validators/athleteSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AthleteFormField } from "./InputField";
import { DateField } from "./DateField";
import { SelectField } from "./SelectField";
import { Button } from "@/components/ui/Button";
import { competition } from "@/types/Competition";
import { gender } from "@/types/Gender";
import { ComponentProps, useRef, useState } from "react";
import { Loading } from "@/components/ui/Loading";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { authentication, db } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { cn } from "@/lib/utils";

interface AddAthleteFormProps extends ComponentProps<"div"> {
  defaultValues?: Athlete;
  action: "add" | "edit";
  children?: React.ReactNode;
}

export function AddAthleteForm({
  defaultValues,
  action = "add",
  children = <Button>Add athlete</Button>,
  className,
  ...props
}: AddAthleteFormProps) {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [user] = useAuthState(authentication);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  const addAthleteForm = useForm<Athlete>({
    resolver: zodResolver(athleteSchema),
    defaultValues: defaultValues ?? {
      name: "",
      competition: "",
      dob: new Date(),
      gender: "",
    },
  });

  const { reset: resetForm } = addAthleteForm;

  async function handleSubmitAthlete(data: Athlete) {
    try {
      if (!user) throw new Error("User is not authenticated");
      setisLoading(true);

      if (action === "add") {
        const athleteDocRef = collection(db, "athletes");

        await addDoc(athleteDocRef, {
          ...data,
          user: user.uid,
        });
      } else if (action === "edit") {
        if (!defaultValues?.docId) throw new Error("No docId found on athlete");

        const athleteDocRef = doc(db, "athletes", defaultValues.docId);
        await setDoc(athleteDocRef, data, { merge: true });
      }

      setisLoading(false);
      closeBtnRef.current?.click();
      resetForm();
    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  }

  return (
    <div className={cn(className)} {...props}>
      <Dialog>
        <DialogTrigger asChild>{children}</DialogTrigger>
        <DialogContent>
          <Form {...addAthleteForm}>
            <form onSubmit={addAthleteForm.handleSubmit(handleSubmitAthlete)}>
              <DialogHeader className="font-bold">
                Add an athlete to the competition
              </DialogHeader>
              <div className="mb-4">
                <div className="grid grid-cols-1 md:grid-cols-2 space-x-4 mt-4">
                  <AthleteFormField
                    form={addAthleteForm}
                    name="name"
                    metaData={{
                      label: "Name",
                      placeholder: "Enter the athlete's name",
                    }}
                  />

                  <DateField
                    form={addAthleteForm}
                    name="dob"
                    metaData={{
                      label: "Date of Birth",
                      placeholder: "Enter the athlete's date of birth",
                    }}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 space-x-4 mt-4">
                  <SelectField
                    form={addAthleteForm}
                    name="gender"
                    selects={gender}
                    metaData={{ label: "Gender", placeholder: "Select gender" }}
                  />

                  <SelectField
                    form={addAthleteForm}
                    name="competition"
                    selects={competition}
                    metaData={{
                      label: "Competition",
                      placeholder: "Select competition",
                    }}
                  />
                </div>
              </div>
              <DialogFooter>
                <DialogClose type="button" ref={closeBtnRef} asChild>
                  <Button variant={"secondary"}>Close</Button>
                </DialogClose>
                <Button disabled={isLoading} type="submit">
                  {isLoading ? <Loading /> : "Add athlete"}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
