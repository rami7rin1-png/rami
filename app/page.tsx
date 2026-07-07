import Hero from "@/components/Hero";
import About from "@/components/About";
import Flow from "@/components/Flow";
import Works from "@/components/Works";
import Pricing from "@/components/Pricing";
import Trial from "@/components/Trial";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Flow />
      <Works />
      <Pricing />
      <Trial />
      <Footer />
    </main>
  );
}
