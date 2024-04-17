import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebTransport } from "./info-web-transport";
import { PraticsSystemTransport } from "./pratics-system-transport";
import { WebTransport } from "./web-transport";

export default function Transport() {
    return (
        <div className="w-full flex flex-col">
            <div className="grow">
                <WebTransport />
            </div>
            <div className="grow">
                <InfoWebTransport />
            </div>
            <div className="grow">
                <PraticsSystemTransport />
            </div>
            <div className="grow">
                <Demonstration />
            </div>
        </div>
    );
}
