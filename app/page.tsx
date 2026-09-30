import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVission from "./components/MissionVision";
import Donate from "./components/Donate";
import WhatsAppButton from "./components/WhatsAppButton";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <MissionVission />
        <Donate />
      </main>
      <WhatsAppButton />
      <Footer />
    </>
  );
}