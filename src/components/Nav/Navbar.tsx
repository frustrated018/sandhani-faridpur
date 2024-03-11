import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import NavLinks from "./NavLinks";

export default function Navbar() {
  return (
    <nav className="bg-secondary">
      <MaxWidthWrapper>
        <section className="flex items-center justify-between py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo-small.svg" alt="logo" height={50} width={50} />
            <h3 className="text-2xl font-semibold">Sandhani, Faridpur</h3>
          </Link>
          {/* Links */}
          <div className="flex items-center gap-2">
            <NavLinks />

            <Link href="/login" className={buttonVariants({})}>Login</Link>
          </div>
        </section>
      </MaxWidthWrapper>
    </nav>
  );
}
