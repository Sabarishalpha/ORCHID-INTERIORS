import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import FeaturedProjects from "./components/FeaturedProjects";
import VideoShowcase from "./components/VideoShowcase";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <FeaturedProjects />
        <VideoShowcase />
        <Testimonials />
        <Projects />
      </main>

      <Footer />
    </>
  );
}
