import { Athlete } from "@/validators/athleteSchema";
import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { Button } from "@/components/ui/Button";
import { MoreHorizontal } from "lucide-react";
import { AddAthleteForm } from "@/components/Forms/AddAthleteForm/AddAthleteForm";
import { DeleteAthleteModal } from "@/components/Modals/DeleteAthleteModal";

export const actionsColumn: ColumnDef<Athlete> = {
  id: "actions",
  header: () => {
    return <></>;
  },
  cell: ({ row }) => {
    const athlete = row.original;

    return (
      <div className="flex justify-end items-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant="ghost" className="h-8 w-8 p-0" asChild>
              <>
                <span className="sr-only">Open menu</span>
                <MoreHorizontal className="h-4 w-4" />
              </>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuLabel>
              <AddAthleteForm action="edit" defaultValues={athlete}>
                <span className="w-full text-left cursor-pointer font-normal pb-2">
                  Change athlete
                </span>
              </AddAthleteForm>
            </DropdownMenuLabel>
            <DropdownMenuLabel>
              <DeleteAthleteModal athlete={athlete} />
            </DropdownMenuLabel>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    );
  },
};
