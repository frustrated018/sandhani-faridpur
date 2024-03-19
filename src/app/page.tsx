import Footer from "@/components/Footer/Footer";
import About from "@/components/Home/About";
import Contact from "@/components/Home/Contact";
import Faq from "@/components/Home/Faq";
import Hero from "@/components/Home/Hero";
import Testimonial from "@/components/Home/Testimonial";
import Navbar from "@/components/Nav/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Testimonial />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
