'use client'

import AboutUs from "@/components/home/aboutUs";
import OurServices from "@/components/home/ourServices";
import WhyChooseUs from "@/components/home/chooseUs";
import OurProjects from "@/components/home/ourProjects";
import { ContactSection } from "@/components/home/contactUs";
import { BlogSection } from "@/components/home/blog";
import ImageStrip from "@/components/home/symptoms";
import AboutIntro from "@/components/home/intro";
import OurValues from "@/components/home/ourValue";
import VisitUs from "@/components/home/visitUs";
import OurTeam from "@/components/home/team";
import FAQ from "@/components/home/faq";

export default function Home() {

  return (
    <>
      {/* <Hero /> */}
      <WhyChooseUs />
      <AboutIntro />
      <OurValues />
      <VisitUs />
      <OurTeam />
      <FAQ />
      {/* <AboutUs /> */}
      {/* <OurProjects /> */}
      {/* <OurServices /> */}
      {/* <ImageStrip /> */}

      {/* <Products /> */}
      {/* <BlogSection /> */}

      {/* <ContactSection /> */}
    </>
  );
}

