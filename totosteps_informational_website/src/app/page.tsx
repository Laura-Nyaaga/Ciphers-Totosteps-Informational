
import Footer from "./components/footer";
import Mission from "./components/mission";
import Team from "./components/team";
import Features from "./components/features";
import Navbar from "./components/navbar";
import LandingPage from "./components/landingpage";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPage />
      <Features />
      <Mission />
      <Team />
      <Footer />
    </main>
  );
}
