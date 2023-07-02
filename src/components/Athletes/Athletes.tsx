import { Athlete } from "@/validators/athleteSchema";
import { AthleteTable } from "./Table/AthleteTable";
import { columns } from "./Table/Columns";

interface AthletesProps {
  //   athletes: Athlete[];
}

export function Athletes({}: //   athletes = [
//     { name: "Test", competition: "Junior", dob: new Date(), gender: "Female" },
//   ],
AthletesProps) {
  const athletes: Athlete[] = [
    { name: "Test", competition: "Junior", dob: new Date(), gender: "Female" },
  ];
  //   const athletes: Athlete[] = [];
  return (
    <div className="border shadow-md rounded-md">
      <AthleteTable data={athletes} columns={columns} />
    </div>
  );
}
