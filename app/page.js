import Hero from "@/components/Hero/Hero";
import Navbar from "@/components/Navbar/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-[4rem] lg:pt-[5rem]">
        <Hero />
      </div>
    </>
  );
}
