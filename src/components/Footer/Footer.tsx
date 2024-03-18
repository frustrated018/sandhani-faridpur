import MaxWidthWrapper from "../MaxWidthWrapper";
import { MdOutlineFacebook } from "react-icons/md";
import { FaDiscord, FaSquareXTwitter, FaYoutube } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <MaxWidthWrapper className="space-y-8 overflow-hidden py-5">
      <div className="-mb-5">
        <Link
          href="/"
          className="flex flex-col items-center justify-center gap-2"
        >
          <Image src="/logo-small.svg" alt="logo" height={100} width={100} />
          <h3 className="font-cabinate-grotesk text-xl font-semibold">
            Sandhani, Faridpur
          </h3>
        </Link>
      </div>
      <footer className="flex flex-wrap justify-center">
        <div className="px-5 py-2">
          <a
            href="#"
            className="text-base font-semibold leading-6 text-muted-foreground hover:text-secondary-foreground hover:underline xl:text-lg"
          >
            About
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="#"
            className="text-base font-semibold leading-6 text-muted-foreground hover:text-secondary-foreground hover:underline xl:text-lg"
          >
            Blog
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="#"
            className="text-base font-semibold leading-6 text-muted-foreground hover:text-secondary-foreground hover:underline xl:text-lg"
          >
            Donate
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="#"
            className="text-base font-semibold leading-6 text-muted-foreground hover:text-secondary-foreground hover:underline xl:text-lg"
          >
            Gallery
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="#"
            className="text-base font-semibold leading-6 text-muted-foreground hover:text-secondary-foreground hover:underline xl:text-lg"
          >
            Contact
          </a>
        </div>
        <div className="px-5 py-2">
          <a
            href="#"
            className="text-base font-semibold leading-6 text-muted-foreground hover:text-secondary-foreground hover:underline xl:text-lg"
          >
            Terms & Condition
          </a>
        </div>
      </footer>
      <div className="mt-8 flex justify-center space-x-6">
        <a
          href="#"
          className="text-muted-foreground hover:text-secondary-foreground"
        >
          <span className="sr-only">Facebook</span>
          <MdOutlineFacebook size={30} />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-secondary-foreground"
        >
          <span className="sr-only">Instagram</span>
          <RiInstagramFill size={30} />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-secondary-foreground"
        >
          <span className="sr-only">Twitter</span>
          <FaSquareXTwitter size={30} />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-secondary-foreground"
        >
          <span className="sr-only">Youtube</span>
          <FaYoutube size={30} />
        </a>
        <a
          href="#"
          className="text-muted-foreground hover:text-secondary-foreground"
        >
          <span className="sr-only">Discord</span>
          <FaDiscord size={30} />
        </a>
      </div>
      <p className="mt-8 text-center text-base leading-6 text-gray-400 xl:text-lg">
        © 2024 Sandhani, Faridpur | All rights reserved.
      </p>
    </MaxWidthWrapper>
  );
}
