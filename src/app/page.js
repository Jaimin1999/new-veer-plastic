import Image from "next/image";

import Hero from "@/app/home-components/Hero";
import Section2 from "@/app/home-components/Section2";
import Section3 from "@/app/home-components/Section3";
import Section4 from "@/app/home-components/Section4";
import Section5 from "@/app/home-components/Section5";

export default function Home() {
  return (
    <div className="">
      <Hero />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}
