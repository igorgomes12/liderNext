import { Demonstration } from "../(lading)/_tabs/demonstration";
import { InfoWebNotas } from "./info-web-notas";
import { PraticsSystemNotas } from "./pratics-system-notas";
import { WebNotas } from "./web-notas";


export default function Grades() {
    return (
        <div className="w-full flex flex-col">
           <WebNotas/>
           <InfoWebNotas/>
           <PraticsSystemNotas/>
           <Demonstration />
        </div>
    );
}
