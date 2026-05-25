import Header from "@/components/layout/Header";
// import AOSProvider from "../providers/AOSProvider";
import HeroWrapper from "@/components/home/heroWrapper";
import Footer from "@/components/layout/Footer";
import FloatingActions from "@/components/common/FloatingActions";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="headercontainer overflow-hidden">
        <Header />
        <HeroWrapper />
      </div>
      {children}
      <Footer />
      <FloatingActions />
    </>
  );
}
