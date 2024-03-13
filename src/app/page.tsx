import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Nav/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
    </main>
  );
}
