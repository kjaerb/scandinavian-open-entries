import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { UserInfoSchema } from "@/validators/userInfoSchema";
import { UseFormReturn } from "react-hook-form";

interface ContactInfoStepProps {
  form: UseFormReturn<UserInfoSchema>;
}

export function ContactInfoStep({ form }: ContactInfoStepProps) {
  return (
    <div>
      <FormField
        {...form}
        name="name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Name</FormLabel>
            <FormControl>
              <Input
                autoComplete="cc-name"
                placeholder="Name for contact person"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="flex flex-col md:flex-row mt-0 md:mt-2">
        <FormField
          {...form}
          name="contactEmail"
          render={({ field }) => (
            <FormItem className="mr-0 md:mr-2 w-full">
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  autoComplete="email"
                  placeholder="Email for contact person"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          {...form}
          name="phone"
          render={({ field }) => (
            <FormItem className="ml-0 md:ml-2 w-full">
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  autoComplete="phone"
                  placeholder="Phone number for contact person"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
