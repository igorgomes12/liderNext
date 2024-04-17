import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebFood } from "./info-web-food";
import { PraticsSystemFood } from "./pratics-system-food";
import { WebFood } from "./web-food";

export default function Food() {
  return (
    <div className="w-full flex flex-col">
      <div className="flex-grow">
        <WebFood />
      </div>
      <div className="flex-grow">
        <InfoWebFood />
      </div>
      <div className="flex-grow">
        <PraticsSystemFood />
      </div>
      <div className="flex-grow">
        <Demonstration />
      </div>
    </div>
  );
}
