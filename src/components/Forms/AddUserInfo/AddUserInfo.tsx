"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/Dialog";
import { StepsNavigation } from "./StepsNavigation";
import userInfoStepsStore from "@/stores/userInfoStepsStore";

interface StepsContainerProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function AddUserInfo({ isOpen = false, setIsOpen }: StepsContainerProps) {
  const { currentStep } = userInfoStepsStore();

  const stepComponent: Record<string, React.ReactNode> = {
    1: <div>Step 1</div>,
  };

  return (
    <Dialog open={isOpen}>
      <DialogContent showClose={false}>
        <DialogHeader>
          <DialogTitle>User information yoyo</DialogTitle>
        </DialogHeader>
        <form>
          <StepsNavigation>{stepComponent[currentStep]}</StepsNavigation>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddUserInfo;
