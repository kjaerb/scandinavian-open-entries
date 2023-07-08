import { Athlete } from "@/validators/athleteSchema";
import { ColumnDef } from "@tanstack/react-table";

export const genderColumn: ColumnDef<Athlete> = {
  accessorKey: "gender",
  header: "Gender",
  cell: ({ row }) => {
    const gender = row.original.gender;

    return <p>{gender}</p>;
  },
};
