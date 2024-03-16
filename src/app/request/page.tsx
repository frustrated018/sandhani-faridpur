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

// TODO: The data in this page will load from the db. It will be the donors db and we will fetch the data from the server and sort it by blood group and show cards based on that

const RequestPage = async () => {
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
          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">A (+ve)</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl">Available Now: 7 bags</h3>
            </CardContent>
            <CardFooter>
              <Button>Call Now</Button>
            </CardFooter>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">A (-ve)</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl">Available Now: 3 bags</h3>
            </CardContent>
            <CardFooter>
              <Button>Call Now</Button>
            </CardFooter>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">B (+ve)</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl">Available Now: 10 bags</h3>
            </CardContent>
            <CardFooter>
              <Button>Call Now</Button>
            </CardFooter>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">B (-ve)</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl">Available Now: 4 bags</h3>
            </CardContent>
            <CardFooter>
              <Button>Call Now</Button>
            </CardFooter>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">O (+ve)</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl">Available Now: 6 bags</h3>
            </CardContent>
            <CardFooter>
              <Button>Call Now</Button>
            </CardFooter>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">O (-ve)</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl">Available Now: 2 bags</h3>
            </CardContent>
            <CardFooter>
              <Button>Call Now</Button>
            </CardFooter>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">AB (+ve)</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl">Available Now: 3 bags</h3>
            </CardContent>
            <CardFooter>
              <Button>Call Now</Button>
            </CardFooter>
          </Card>

          <Card className="bg-secondary">
            <CardHeader>
              <CardTitle className="text-2xl text-red-500">AB (-ve)</CardTitle>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl">Available Now: 9 bags</h3>
            </CardContent>
            <CardFooter>
              <Button>Call Now</Button>
            </CardFooter>
          </Card>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default RequestPage;
