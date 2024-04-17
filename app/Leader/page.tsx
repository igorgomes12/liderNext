import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebLider } from "./info-web-lider";
import { PraticsSystem } from "./pratics-system";
import { WebLider } from "./web-lider";

export default function Lider() {
  return (
    <div id="lider" className="w-full flex flex-col">
      <div className="grow">
        <WebLider />
      </div>
      <div className="grow">
        <InfoWebLider />
      </div>
      <div className="grow">
        <PraticsSystem />
      </div>
      <div className="grow">
        <Demonstration />
      </div>
    </div>
  );
}
