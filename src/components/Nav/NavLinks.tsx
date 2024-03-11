import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

export default function NavLinks() {
  const links = [
    { href: "/", label: "Home", icon: HomeIcon },
    { href: "/request", label: "Request" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/gallery", label: "Gallery" },
  ];

  return (
    <div className="flex items-center gap-2">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={buttonVariants({ variant: "outline", className:"items-center gap-2" })}
        >
          {link.icon ? <link.icon /> : null}
          {link.label}
        </Link>
      ))}
    </div>
  );
}
