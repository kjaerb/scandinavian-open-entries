import { Athlete } from "@/validators/athleteSchema";
import { columns } from "./Columns";
import { AthleteTable } from "./Table";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { authentication, db } from "@/lib/firebase";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { fbDateToDate } from "@/lib/utils";

interface AthletesTableProps {
  athletes?: Athlete[];
}

export function AthletesTable({}: AthletesTableProps) {
  const [auth, authIsLoading] = useAuthState(authentication);
  const [athletes, setAthletes] = useState<Athlete[]>([]);

  useEffect(() => {
    if (!auth) return;

    const athleteRef = collection(db, "athletes");
    const athleteQuery = query(athleteRef, where("user", "==", auth.uid));

    const unsubscribe = onSnapshot(athleteQuery, (snapshot) => {
      const athleteList = snapshot.docs.map((doc) => {
        const data = doc.data();

        delete data.user;
        return {
          ...data,
          docId: doc.id,
          dob: new Date(fbDateToDate(data.dob)),
        } as Athlete;
      });

      setAthletes(athleteList);
    });

    return () => unsubscribe();
  }, [authIsLoading]);

  return (
    <div className="border shadow-md rounded-md">
      <AthleteTable columns={columns} data={athletes} />
    </div>
  );
}
