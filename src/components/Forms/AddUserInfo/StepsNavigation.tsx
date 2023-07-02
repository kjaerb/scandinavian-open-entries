import { DialogFooter } from "@/components/ui/Dialog";
import Steps from "./Steps";
import { Button } from "@/components/ui/Button";
import userInfoStepsStore from "@/stores/userInfoStepsStore";
import { useEffect, useState } from "react";
import { Loading } from "@/components/ui/Loading";

interface StepsNavigationProps {
  children?: React.ReactNode;
}

export function StepsNavigation({ children }: StepsNavigationProps) {
  const { currentStep, incrementStep, decrementStep, isUploadingData } =
    userInfoStepsStore();

  const [buttonTimeout, setButtonTimeout] = useState<boolean>(true);

  useEffect(() => {
    if (currentStep === 3) {
      setTimeout(() => {
        setButtonTimeout(false);
      }, 20);
    } else {
      setButtonTimeout(true);
    }
  }, [currentStep]);

  return (
    <div>
      <Steps />
      <div className="py-4">{children}</div>
      <DialogFooter>
        <Button
          onClick={decrementStep}
          variant={"secondary"}
          disabled={currentStep === 0}
          type="button"
        >
          Previous
        </Button>
        {currentStep === 3 ? (
          <Button type="submit" disabled={buttonTimeout || isUploadingData}>
            {isUploadingData ? <Loading /> : "Submit"}
          </Button>
        ) : (
          <Button
            onClick={() => currentStep < 3 && incrementStep()}
            type={"button"}
            disabled={currentStep > 2}
          >
            Next
          </Button>
        )}
      </DialogFooter>
    </div>
  );
}
