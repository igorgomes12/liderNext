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
      <div className="flex-grow">
        <Info />
      </div>
      <div className="flex-grow">
        <Solution />
      </div>
      <div className="flex-grow">
        <Leader />
      </div>
      <div className="flex-grow">
        <Values />
      </div>
      <div className="flex-grow">
        <Demonstration />
      </div>
      <div className="px-2 w-full">
        <Map center={[-20.662688, -40.502052]} />
      </div>
      <div className="flex-grow">
        <Contact />
      </div>
      <div className="flex-grow">
        <Depositions />
      </div>
    </div>
  );
}
