import { Athlete } from "@/validators/athleteSchema";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";

export const dobColumn: ColumnDef<Athlete> = {
  accessorKey: "dob",
  header: ({ column }) => {
    return (
      <button
        className="flex justify-center items-center hover:bg-gray-100 px-2 py-2 rounded-md transition-colors duration-200"
        onClick={() => column.toggleSorting(column.getIsSorted() == "asc")}
      >
        Date of Birth
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </button>
    );
  },
  cell: ({ row }) => {
    const date = row.original.dob.toDateString();

    return <p className="pl-2">{date}</p>;
  },
};
