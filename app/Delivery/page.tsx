import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebDelivery } from "./info-web-delivery";
import { PraticsSystemDelivery } from "./pratics-system-delivery";
import { WebDelivery } from "./web-delivery";


export default function Delivery() {
    return (
        <div className="w-full flex flex-col">
            <WebDelivery />
            <InfoWebDelivery/>
            <PraticsSystemDelivery/>
            <Demonstration />
        </div>
    );
}
