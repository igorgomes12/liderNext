import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebLider } from "./info-web-lider";
import { PraticsSystem } from "./pratics-system";
import { WebLider } from "./web-lider";

export default function Lider() {
    return (
      <div className="w-full flex flex-col">        
        <WebLider/>
        <InfoWebLider/>
        <PraticsSystem/>
        <Demonstration />
      </div>
    );
  }
  