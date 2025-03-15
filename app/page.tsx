import Image from "next/image";
import HeroSection from "./landingPage/Hero";
import StepsSection from "./landingPage/Works";
import Create from "./landingPage/Create";
import StatisticsSection from "./landingPage/Details";
import FindJob from "./landingPage/FindJob";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Create />
      <StepsSection />
      <StatisticsSection />
      <FindJob />
    </>
  );
}
