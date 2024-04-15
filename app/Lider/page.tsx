import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebLider } from "./info-web-lider";
import { WebLider } from "./web-lider";

export default function Lider() {
    return (
      <div className="w-full flex flex-col">        
        <WebLider/>
        <InfoWebLider/>
        <Demonstration />
      </div>
    );
  }
  