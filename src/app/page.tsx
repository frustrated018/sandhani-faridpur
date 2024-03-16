import ExampleUploader from "@/components/ExampleUploader";
import About from "@/components/Home/About";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Nav/Navbar";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
}
