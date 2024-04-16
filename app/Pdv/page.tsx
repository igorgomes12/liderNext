import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebPDV } from "./info-web-pdv";
import { PraticsSystemPDV } from "./pratics-system-pdv";
import { WebPDV } from "./web-pdv";

export default function PDV() {
    return (
        <div className="w-full flex flex-col">
            <WebPDV/>
            <InfoWebPDV/>
            <PraticsSystemPDV/>
            <Demonstration />
        </div>
    );
}
