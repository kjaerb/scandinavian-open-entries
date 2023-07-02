import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/Form";
import { Input } from "@/components/ui/Input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { UserInfoSchema } from "@/validators/userInfoSchema";
import { UseFormReturn } from "react-hook-form";

interface ClubInformationStepProps {
  form: UseFormReturn<UserInfoSchema>;
}

export function ClubInformationStep({ form }: ClubInformationStepProps) {
  return (
    <div>
      <FormField
        {...form}
        name="country"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Country</FormLabel>
            <FormControl>
              <Input autoComplete="country" placeholder="Country" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <div className="pt-2">
        <Tabs defaultValue="club">
          <p className="">Chose either club or federation</p>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="club">Club</TabsTrigger>
            <TabsTrigger value="federation">Federation</TabsTrigger>
          </TabsList>
          <FormField
            {...form}
            name="organization"
            render={() => (
              <>
                <TabsContent value="club">
                  <FormField
                    {...form}
                    name="organization.club"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Club</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter club" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
                <TabsContent value="federation">
                  <FormField
                    {...form}
                    name="organization.federation"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Federation</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter federation" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </TabsContent>
                <FormMessage className="mt-2" />
              </>
            )}
          />
        </Tabs>
      </div>
    </div>
  );
}
