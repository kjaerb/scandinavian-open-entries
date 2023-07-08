import { Athlete } from "@/validators/athleteSchema";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/Dialog";
import { Button } from "@/components/ui/Button";
import { useRef, useState } from "react";
import { Loading } from "@/components/ui/Loading";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase";

interface DeleteAthleteModalProps {
  athlete: Athlete;
  children?: React.ReactNode;
}

export function DeleteAthleteModal({
  athlete,
  children = <Button variant={"destructive"}>Delete athlete</Button>,
}: DeleteAthleteModalProps) {
  const [isLoading, setisLoading] = useState<boolean>(false);
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  async function handleDeleteAthlete() {
    try {
      if (!athlete.docId) throw new Error("No docId found on athlete");

      setisLoading(true);

      const athleteDocRef = doc(db, "athletes", athlete.docId);
      await deleteDoc(athleteDocRef);
      setisLoading(false);
      closeBtnRef.current?.click();
    } catch (error) {
      console.error(error);
    } finally {
      setisLoading(false);
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>Delete athlete</DialogHeader>
        <DialogDescription>
          Are you sure you want to delete {athlete.name}? This action cannot be
          undone.
        </DialogDescription>
        <DialogFooter>
          <DialogClose type="button" asChild>
            <Button variant={"secondary"}>Close</Button>
          </DialogClose>
          <Button
            variant={"destructive"}
            ref={closeBtnRef}
            onClick={handleDeleteAthlete}
          >
            {isLoading ? <Loading /> : "Delete athlete"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
