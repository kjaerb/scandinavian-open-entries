import { FormField, FormMessage } from "@/components/ui/Form";
import { Separator } from "@/components/ui/Separator";
import { cn } from "@/lib/utils";
import { UserInfoSchema } from "@/validators/userInfoSchema";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

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
        <FormSummaryMessage form={form} name="name" label="Name" />
        <FormSummaryMessage
          form={form}
          name="contactEmail"
          label="Contact Email"
        />
        <FormSummaryMessage form={form} name="phone" label="Contact Phone" />
      </div>
      <Separator className="bg-gray-400" />
      <div className="my-2">
        <p className="font-bold text-md">Club info</p>
        <FormSummaryMessage form={form} name="country" label="Country" />
        {!getValues("organization.club") &&
        !getValues("organization.federation") ? (
          <>
            <FormSummaryMessage
              form={form}
              name="organization.club"
              label="Club"
            />
            <FormSummaryMessage
              form={form}
              name="organization.federation"
              label="Federation"
            />
          </>
        ) : getValues("organization.club") ? (
          <FormSummaryMessage
            form={form}
            name="organization.club"
            label="Club"
          />
        ) : (
          <FormSummaryMessage
            form={form}
            name="organization.federation"
            label="Federation"
          />
        )}
        <FormField
          name={"organization"}
          control={form.control}
          render={() => {
            return (
              <p className={cn("flex text-base")}>
                <FormMessage className="text-base" />
              </p>
            );
          }}
        />
      </div>
    </div>
  );
}

interface FormSummaryMessageProps<TForm extends FieldValues> {
  form: UseFormReturn<TForm>;
  name: Path<TForm>;
  label?: string;
}

function FormSummaryMessage<TForm extends FieldValues>({
  form,
  name,
  label,
}: FormSummaryMessageProps<TForm>) {
  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => {
        return (
          <p className={cn("flex text-base", !field.value && "text-red-500")}>
            {label}:{" "}
            {field.value ? (
              field.value
            ) : (
              <p className="pl-2">
                <FormMessage className="text-base" />
              </p>
            )}
          </p>
        );
      }}
    />
  );
}
