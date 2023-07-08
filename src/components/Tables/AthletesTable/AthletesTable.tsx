import { Athlete } from "@/validators/athleteSchema";
import { columns } from "./Columns";
import { AthleteTable } from "./Table";

interface AthletesTableProps {
  athletes: any;
}

export function AthletesTable({ athletes }: AthletesTableProps) {
  const athlete: Athlete[] = [
    {
      name: "John Doe",
      dob: new Date(),
      competition: "Junior",
      gender: "Female",
    },
  ];

  return (
    <div className="border shadow-md rounded-md">
      <AthleteTable columns={columns} data={athlete} />
    </div>
  );
}
