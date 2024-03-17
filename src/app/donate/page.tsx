import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import DonationFom from "./DonationFom";

const DonatePage = async () => {
  //! Checking If user is logged in or not!
  const { isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("api/auth/login");
  }

  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <section className="my-5 space-y-3 text-center lg:my-10">
          <h1 className="font-cabinate-grotesk text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Donate <span className="text-red-500">Blood</span>, Save Lives
          </h1>
          <p className="mx-auto max-w-[750px] md:text-xl">
            Fill out the form below to schedule your blood donation appointment
          </p>
        </section>

        <section>
          <DonationFom />
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default DonatePage;
