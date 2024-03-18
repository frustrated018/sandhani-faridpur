import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";
import ReqCard from "./ReqCard";

// TODO: The data in this page will load from the db. It will be the donors db and we will fetch the data from the server and sort it by blood group and show cards based on that

const RequestPage = async () => {
  //! Checking If user is logged in or not!
  const { isAuthenticated } = getKindeServerSession();

  const isLoggedIn = await isAuthenticated();

  if (!isLoggedIn) {
    redirect("api/auth/login");
  }

  // Data for blood groups
  const bloodGroups = [
    { title: "A (+ve)", available: 7, phone: "012342523423" },
    { title: "A (-ve)", available: 3, phone: "012342523423" },
    { title: "B (+ve)", available: 10, phone: "012342523423" },
    { title: "B (-ve)", available: 4, phone: "012342523423" },
    { title: "O (+ve)", available: 6, phone: "012342523423" },
    { title: "O (-ve)", available: 2, phone: "012342523423" },
    { title: "AB (+ve)", available: 3, phone: "012342523423" },
    { title: "AB (-ve)", available: 9, phone: "012342523423" },
  ];

  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <section className="my-5 space-y-3 text-center lg:my-10">
          <h1 className="font-cabinate-grotesk text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Currently Available Blood Groups
          </h1>
          <p className="mx-auto max-w-[750px] md:text-xl">
            Whether it&apos;s an emergency or a planned procedure, we are here
            24/7 to help you get the blood you need. Reach out to us through our
            social channels or contact us directly through email or phone.
          </p>
        </section>

        {/* Blood Cards */}

        <section className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          {bloodGroups.map((bloodGroup, idx) => (
            <ReqCard key={idx + bloodGroup.title} data={bloodGroup} />
          ))}
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default RequestPage;
