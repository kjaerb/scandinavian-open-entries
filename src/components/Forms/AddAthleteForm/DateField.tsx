import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface DateFieldProps<TData extends FieldValues> {
  form: UseFormReturn<TData>;
  name: Path<TData>;
  metaData: {
    label: string;
    placeholder: string;
  };
}

export function DateField<TData extends FieldValues>({
  form,
  name,
  metaData: { label, placeholder },
}: DateFieldProps<TData>) {
  const { control } = form;

  return (
    <FormField
      control={control}
      name={name}
      rules={{
        validate: (value) => (value as any) instanceof Date,
      }}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input type="date" placeholder={placeholder} {...field} />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
