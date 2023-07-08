import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/Select";
import { FieldValues, Path, UseFormReturn } from "react-hook-form";

interface SelectFieldProps<TData extends FieldValues> {
  form: UseFormReturn<TData>;
  name: Path<TData>;
  selects: readonly string[];
  metaData: {
    label: string;
    placeholder: string;
  };
}

export function SelectField<TData extends FieldValues>({
  form,
  name,
  selects,
  metaData: { label, placeholder },
}: SelectFieldProps<TData>) {
  const { control } = form;

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <Select
            onValueChange={() => field.onChange(field.value)}
            defaultValue={field.value}
          >
            <FormControl>
              <SelectTrigger>
                <SelectValue
                  defaultValue={field.value}
                  placeholder={placeholder}
                >
                  <span className="text-gray-500">{placeholder}</span>
                </SelectValue>
              </SelectTrigger>
            </FormControl>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>{label}</SelectLabel>
                {selects.map((select, index) => (
                  <SelectItem key={index} value={select}>
                    {select}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>

          <FormMessage />
        </FormItem>
      )}
    />
  );
}
