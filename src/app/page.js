import Image from "next/image";
import Hero from "./components/sections/home/Hero";
import Catalog from "./components/sections/home/Catalog";

export default function Home() {
  return (
    <>
      <Hero />
      <Catalog />
    </>
  );
}
