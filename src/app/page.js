"use client";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import IntroVideo from "./components/IntroVideo";
import CareerOverview from "./components/CareerOverview";

import Stats from "./components/Stats";
import WorkExperience from "./components/WorkExperience";
import ContactUs from "./components/ContactUs";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Achievements from "./components/Achievements";
import Gallery from "./components/Gallery";
import Memories from "./components/Memories";

const Page = () => {
  return (
    <div className="bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <Home />
      <IntroVideo />
      <CareerOverview />

      <div className="flex flex-col gap-0 py-20 pb-0">
        <Stats />
        <Memories />
        <WorkExperience />
        <Achievements />
        <Gallery />
        <AboutUs />
        <ContactUs />
      </div>

      <Footer />
    </div>
  );
};

export default Page;
