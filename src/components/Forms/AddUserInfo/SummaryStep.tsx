import { Separator } from "@/components/ui/Separator";
import { UserInfoSchema } from "@/validators/userInfoSchema";
import { UseFormReturn } from "react-hook-form";

interface SummaryStepProps {
  form: UseFormReturn<UserInfoSchema>;
}

export function SummaryStep({ form }: SummaryStepProps) {
  const { getValues } = form;

  return (
    <div>
      <h3 className="font-bold text-lg">
        Here&apos;s a summary of the info you provided
      </h3>
      <div className="my-2">
        <p className="font-bold text-md">Contact info</p>
        <p>Name: {getValues("name")}</p>
        <p>Email: {getValues("contactEmail")}</p>
        <p>Phone: {getValues("phone")}</p>
      </div>
      <Separator className="bg-gray-400" />
      <div className="my-2">
        <p className="font-bold text-md">Club info</p>
        <p>Country: {getValues("country")}</p>
        {getValues("organization.club") ? (
          <p>Club: {getValues("organization.club")}</p>
        ) : null}
        {getValues("organization.federation") ? (
          <p>Federation: {getValues("organization.federation")}</p>
        ) : null}
      </div>
    </div>
  );
}
