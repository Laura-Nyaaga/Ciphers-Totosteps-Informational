
import Footer from "./components/Footer";
import CTA from "./components/Cta";
import Mission from "./components/Mission";
import Team from "./components/Team";
import Features from "./components/Feature";
import Navbar from "./components/Navbar";
import LandingPage from "./components/Landingpage";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <Features />
      <Mission />
      <Team />
      <CTA />
      <Footer />
    </main>
  );
}
