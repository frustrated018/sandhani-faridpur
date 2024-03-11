import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-secondary">
      <MaxWidthWrapper>
        <section className="py-4">
            <div>
                <Image src="/logo-small.svg" alt="logo" height={50} width={50}/>
            </div>
        </section>
      </MaxWidthWrapper>
    </nav>
  );
}
