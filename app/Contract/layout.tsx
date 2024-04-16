import { FC } from "react";
import { Header } from "../(lading)/header";
import { Footer } from "../(lading)/footer";

type Props = {
  children: React.ReactNode;
};

const LandingLayout: FC<Props> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center">
        {children}
      </main>
      <Footer />
    </div>
  );
};
export default LandingLayout;