import Navbar from "@/components/Nav/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Navbar />

      <div className="flex min-h-screen w-full flex-col items-center justify-center">
        <h2 className="font-cabinate-grotesk text-6xl">Grotesk</h2>
        <h2 className="font-cabinate-grotesk text-6xl font-bold">
          Grotesk Bold
        </h2>
        <h2 className="font-satoshi text-6xl font-thin">Satoshi thin</h2>
        <i className="text-6xl font-satoshi">Satoshi Italic</i>
        <i className="text-6xl font-cabinate-grotesk">Grotesk Italic</i>
        <h2 className="text-6xl ">Non Satoshi</h2>
      </div>
    </main>
  );
}
