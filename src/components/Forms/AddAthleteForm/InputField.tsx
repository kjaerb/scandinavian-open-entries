import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface AthleteFormFieldProps<TData extends FieldValues> {
  form: UseFormReturn<TData>;
  name: Path<TData>;
  metaData: {
    label: string;
    placeholder: string;
  };
}

export function AthleteFormField<TData extends FieldValues>({
  form,
  name,
  metaData: { label, placeholder },
}: AthleteFormFieldProps<TData>) {
  const { control } = form;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type="text" placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
