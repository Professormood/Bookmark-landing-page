
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/FeaturesCard/Features.jsx";
import Download from "./Components/Download/Download.jsx";
import Faq from "./Components/Faq/Faq.jsx";
import CTA from "./Components/CTA/CTA.jsx";
import Footer from "./Components/Footer/Footer.jsx";
function App() {
  return (
    <>
      <header className="py-10">
        <Navbar />
      </header>
      <section className="mx-auto container ">
        <Hero />
      </section>
      <main>
        <Features />
      </main>
      <Download />
      <Faq />
      <CTA />
      <Footer/>
    </>
  );
}

export default App;
