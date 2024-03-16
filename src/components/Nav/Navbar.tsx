import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { TbCalendarEvent, TbDropletPlus } from "react-icons/tb";
import { BsDroplet } from "react-icons/bs";
import { RiGalleryLine } from "react-icons/ri";
import Profile, { MobileProfile } from "./Profile";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { HamburgerMenuIcon } from "@radix-ui/react-icons";

const links = [
  { href: "/request", label: "Request", icon: TbDropletPlus },
  { href: "/donate", label: "Donate", icon: BsDroplet },
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
            <h3 className="font-cabinate-grotesk text-xl font-semibold xl:text-2xl">
              Sandhani, Faridpur
            </h3>
          </Link>
          {/* Links */}
          <section className="flex items-center gap-2">
            <div className="hidden items-center gap-2 lg:flex">
              {links.map((link) => (
                <Link
                  href={link.href}
                  key={link.href}
                  className={buttonVariants({
                    variant: "outline",
                    className: "items-center gap-2",
                  })}
                >
                  {link.icon ? (
                    <link.icon className="text-red-600" size={20} />
                  ) : null}
                  <span className="text-lg">{link.label}</span>
                </Link>
              ))}
            </div>

            <div className="hidden lg:block">
              <Profile />
            </div>

            {/* //! Mobile Nav */}
            <div className="lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <HamburgerMenuIcon className="size-6" />
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle className="text-xl">
                      Sandhani, Faridpur
                    </SheetTitle>
                  </SheetHeader>

                  <div className="mt-5">
                    <MobileProfile />
                  </div>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {links.map((link) => (
                      <Link
                        href={link.href}
                        key={link.href}
                        className={buttonVariants({
                          variant: "outline",
                          className: "items-center gap-2",
                        })}
                      >
                        {link.icon ? (
                          <link.icon className="text-red-600" size={15} />
                        ) : null}
                        <span>{link.label}</span>
                      </Link>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </section>
        </section>
      </MaxWidthWrapper>
    </nav>
  );
}
