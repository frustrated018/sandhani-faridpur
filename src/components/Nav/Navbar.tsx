import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  TbCalendarEvent,
  TbDropletPlus,
  TbInfoSquare,
  TbMail,
} from "react-icons/tb";
import { RiGalleryLine } from "react-icons/ri";
import Profile from "./Profile";

const links = [
  { href: "/request", label: "Request", icon: TbDropletPlus },
  { href: "/about", label: "About", icon: TbInfoSquare },
  { href: "/contact", label: "Contact", icon: TbMail },
  { href: "/gallery", label: "Gallery", icon: RiGalleryLine },
  { href: "/events", label: "Events", icon: TbCalendarEvent },
];

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
          <section className="flex items-center gap-2">
            <div className="flex items-center gap-2">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className={buttonVariants({
                    variant: "outline",
                    className: "items-center gap-2",
                  })}
                >
                  {link.icon ? <link.icon /> : null}
                  {link.label}
                </Link>
              ))}
            </div>

            <div>
              <Profile />
            </div>
          </section>
        </section>
      </MaxWidthWrapper>
    </nav>
  );
}
