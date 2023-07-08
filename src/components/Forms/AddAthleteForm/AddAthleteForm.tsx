import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Form } from "@/components/ui/Form";
import { Athlete, athleteSchema } from "@/validators/athleteSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { AthleteFormField } from "./InputField";
import { DateField } from "./DateField";
import { SelectField } from "./SelectField";
import { Button } from "@/components/ui/Button";
import { competition } from "@/types/Competition";
import { gender } from "@/types/Gender";

interface AddAthleteFormProps {}

export function AddAthleteForm({}: AddAthleteFormProps) {
  const addAthleteForm = useForm<Athlete>({
    resolver: zodResolver(athleteSchema),
    defaultValues: {
      name: "",
      competition: "",
      dob: new Date(),
      gender: "",
    },
  });

  async function handleSubmitAthlete(data: Athlete) {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  }
  const { getValues } = addAthleteForm;

  return (
    <div className="my-4 border rounded-md shadow-md">
      <Dialog>
        <DialogTrigger>Open here</DialogTrigger>
        <DialogContent>
          <Form {...addAthleteForm}>
            <form onSubmit={addAthleteForm.handleSubmit(handleSubmitAthlete)}>
              <DialogHeader>Add an athlete to the competition</DialogHeader>
              <div className="mb-4">
                <div className="">
                  <AthleteFormField
                    form={addAthleteForm}
                    name="name"
                    metaData={{
                      label: "Name",
                      placeholder: "Enter the athlete's name",
                    }}
                  />
                </div>
                <div>
                  <DateField
                    form={addAthleteForm}
                    name="dob"
                    metaData={{
                      label: "Date of Birth",
                      placeholder: "Enter the athlete's date of birth",
                    }}
                  />
                </div>
                <div>
                  <SelectField
                    form={addAthleteForm}
                    name="gender"
                    selects={gender}
                    metaData={{ label: "Gender", placeholder: "Select gender" }}
                  />
                </div>
                <div>
                  <SelectField
                    form={addAthleteForm}
                    name="competition"
                    selects={competition}
                    metaData={{
                      label: "Competition",
                      placeholder: "Select competition",
                    }}
                  />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
                <Button type="submit">Submit</Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
