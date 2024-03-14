import ExampleUploader from "@/components/ExampleUploader";
import Hero from "@/components/Home/Hero";
import Navbar from "@/components/Nav/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />
      <Hero />
      <div className="mt-40 h-screen">
        <ExampleUploader />
      </div>
    </main>
  );
}
