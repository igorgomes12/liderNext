import { Contact } from "./_tabs/contact";
import { Demonstration } from "./_tabs/demonstration";
import { Info } from "./_tabs/info";
import { Leader } from "./_tabs/leader";
import { Maps } from "./_tabs/maps";
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
      <Maps />
      <Contact />
    </div>
  );
}
