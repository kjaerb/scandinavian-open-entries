import Image from "next/image";
import { Button } from "../ui/Button";

interface HeaderProps {}

export function Header({}: HeaderProps) {
  return (
    <div className="border-b border-b-grey-600 mb-2 py-4 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-lg">Haslev TT</h3>
      </div>
      <ul>
        <li></li>
        <li>
          <Button>Hello</Button>
        </li>
      </ul>
      {/* <Image src={"/haslev-tt.png"} alt="Haslev TT" width={500} height={100} /> */}
    </div>
  );
}
