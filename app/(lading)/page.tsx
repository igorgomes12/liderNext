import { Contact } from "./_tabs/contact";
import { Demonstration } from "./_tabs/demonstration";
import { Depositions } from "./_tabs/depositions";
import { Info } from "./_tabs/info";
import { Leader } from "./_tabs/leader";
import Map from "./_tabs/map";
import { Solution } from "./_tabs/solution";
import { Values } from "./_tabs/values";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Info />
      <Solution />
      <Leader />
      <Values />
      <Demonstration />
      <div className="px-2 w-full">
        <Map center={[-20.662688, -40.502052]} />
      </div>
      <Contact />
      <Depositions />
    </div>
  );
}
