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
        <FormItem className="my-1">
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Select
              // @ts-ignore
              onValueChange={field.onChange}
              defaultValue={field.value}
            >
              <SelectTrigger>
                <SelectValue placeholder={placeholder} />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {selects.map((select, i) => (
                    <SelectItem
                      key={`${select}.${i}`}
                      value={select.toString()}
                    >
                      {select}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
