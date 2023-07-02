import { cn } from "@/lib/utils";
import userInfoStepsStore from "@/stores/userInfoStepsStore";

interface StepsProps {}

export type StepProps = {
  id: number;
  name: string;
};

const steps: StepProps[] = [
  {
    id: 1,
    name: "Contact Information",
  },
  {
    id: 2,
    name: "Club Information",
  },
  {
    id: 3,
    name: "Summary",
  },
];

export default function Steps({}: StepsProps) {
  const { currentStep } = userInfoStepsStore();

  return (
    <nav aria-label="Progress">
      <ol
        role="list"
        className="space-y-4 text-white md:flex md:space-y-0 md:space-x-8"
      >
        {steps.map((step) => (
          <li key={step.name} className="md:flex-1">
            <div className={cn("group  flex flex-col py-2 md:pt-4 md:pb-0 ")}>
              <div className={cn("mb-2 h-1 bg-gray-200")}>
                <div
                  className={cn("h-full", [
                    step.id < currentStep &&
                      "w-full transition-all duration-200 bg-indigo-800",
                    step.id === currentStep &&
                      "w-1/2 transition-all duration-200 bg-gray-500",
                  ])}
                ></div>
              </div>
              <span
                className={cn(
                  [step.id === currentStep ? "text-black" : "text-gray-400"],
                  "text-xs  font-semibold uppercase tracking-wide "
                )}
              >
                {step.name}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
