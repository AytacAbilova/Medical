'use client'

import AboutUs from "@/components/home/aboutUs";
import OurServices from "@/components/home/ourServices";
import WhyChooseUs from "@/components/home/chooseUs";
import OurProjects from "@/components/home/ourProjects";
import { Products } from "@/components/home/testimonals";
import { ContactSection } from "@/components/home/contactUs";
import { BlogSection } from "@/components/home/blog";
import ImageStrip from "@/components/home/symptoms";

export default function Home() {

  return (
    <>
      {/* <Hero /> */}
      <WhyChooseUs />
      <AboutUs />

      <OurServices />
      <ImageStrip />

      <OurProjects />
      <Products />
      <BlogSection />

      <ContactSection />
    </>
  );
}

