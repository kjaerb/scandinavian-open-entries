import { Athlete } from "@/validators/athleteSchema";
import { ColumnDef } from "@tanstack/react-table";

export const nameColumn: ColumnDef<Athlete> = {
  accessorKey: "name",
  header: "Name",
  cell: ({ row }) => {
    const name = row.original.name;

    return <p>{name}</p>;
  },
};
