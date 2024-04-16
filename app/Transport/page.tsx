import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebTransport } from "./info-web-transport";
import { PraticsSystemTransport } from "./pratics-system-transport";
import { WebTransport } from "./web-transport";

export default function Transport() {
    return (
        <div className="w-full flex flex-col">
            <WebTransport />
            <InfoWebTransport/>
            <PraticsSystemTransport/>
            <Demonstration />
        </div>
    );
}
