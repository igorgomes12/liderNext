import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebNotas } from "./info-web-notas";
import { PraticsSystemNotas } from "./pratics-system-notas";
import { WebNotas } from "./web-notas";


export default function Grades() {
    return (
        <div className="w-full flex flex-col">
            <div className="grow">
                <WebNotas />
            </div>
            <div className="grow">
                <InfoWebNotas />
            </div>
            <div className="grow">
                <PraticsSystemNotas />
            </div>
            <div className="grow">
                <Demonstration />
            </div>
        </div>
    );
}
