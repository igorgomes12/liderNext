import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebPDV } from "./info-web-pdv";
import { PraticsSystemPDV } from "./pratics-system-pdv";
import { WebPDV } from "./web-pdv";

export default function PDV() {
    return (
        <div className="w-full flex flex-col">
            <div className="grow">
                <WebPDV />
            </div>
            <div className="grow">
                <InfoWebPDV />
            </div>
            <div className="grow">
                <PraticsSystemPDV />
            </div>
            <div className="grow">
                <Demonstration />
            </div>
        </div>
    );
}
