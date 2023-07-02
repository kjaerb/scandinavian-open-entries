import { DialogFooter } from "@/components/ui/Dialog";
import Steps from "./Steps";
import { Button } from "@/components/ui/Button";
import userInfoStepsStore from "@/stores/userInfoStepsStore";

interface StepsNavigationProps {
  children?: React.ReactNode;
}

export function StepsNavigation({ children }: StepsNavigationProps) {
  const { currentStep, incrementStep, decrementStep } = userInfoStepsStore();

  return (
    <div>
      <Steps />
      <div className="py-4">{children}</div>
      <DialogFooter>
        <Button
          onClick={decrementStep}
          variant={"secondary"}
          disabled={currentStep === 0}
        >
          Previous
        </Button>
        <Button onClick={incrementStep}>
          {currentStep === 3 ? "Finish" : "Next"}
        </Button>
      </DialogFooter>
    </div>
  );
}
