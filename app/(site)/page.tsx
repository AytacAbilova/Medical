'use client'

import AboutUs from "@/components/home/aboutUs";
import OurServices from "@/components/home/ourServices";
import WhyChooseUs from "@/components/home/chooseUs";
import { ContactSection } from "@/components/home/contactUs";
import AboutIntro from "@/components/home/intro";
import OurValues from "@/components/home/ourValue";
import VisitUs from "@/components/home/visitUs";
import OurTeam from "@/components/home/team";
import FAQ from "@/components/home/faq";
import BlogSection from "@/components/home/blog";

export default function Home() {

  return (
    <>
      {/* <Hero /> */}
      <WhyChooseUs />
      {/* <AboutUs /> */}
      <AboutIntro />
      <OurValues />
      <VisitUs />
      <OurTeam />
      <FAQ />
      {/* <BlogSection /> */}
      
      {/* <OurProjects /> */}
      {/* <OurServices /> */}
      {/* <ImageStrip /> */}

      {/* <Products /> */}

      {/* <ContactSection /> */}
    </>
  );
}

