import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import MissionVission from "./components/MissionVision";
import Donate from "./components/Donate";
import Footer from "./components/Footer";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <MissionVission />
        <Services/>
        <Donate />
      </main>
      <Footer />
    </>
  );
}