import Header from "@/components/layout/Header";
import AOSProvider from "../providers/AOSProvider";
import HeroWrapper from "@/components/home/heroWrapper";
import Footer from "@/components/layout/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="headercontainer overflow-hidden">
        <Header />
        <AOSProvider />
        <HeroWrapper />
      </div>
      {children}
      <Footer />
    </>
  );
}
