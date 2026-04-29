import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import About from "./components/About";
import Menu from "./components/Menu";
import Info from "./components/Info";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";

export default function App() {
  return (
    <div className="min-h-screen" style={{ fontFamily: "'Inter', sans-serif", backgroundColor: "#1a0f05" }}>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <About />
        <Menu />
        <Info />
        <Footer />
      </main>
      <FloatingActions />
    </div>
  );
}
