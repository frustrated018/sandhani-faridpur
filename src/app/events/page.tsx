import Footer from "@/components/Footer/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";
import SectionTitle from "@/components/SectionTitle";
import { Button } from "@/components/ui/button";
import { CardContent, Card, CardFooter } from "@/components/ui/card";
import Image from "next/image";

export default function EventPage() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="my-10">
        <SectionTitle
          title="Upcoming Events"
          subTitle="Check out our upcoming events. You can sign up to donate or volunteer at any of them. We appreciate all the help we can get."
        />
        <section className="mt-10 space-y-5">
          <Card className="mx-auto max-w-4xl">
            <CardContent className="mt-5 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
              <section>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    Blood Drive Event
                  </h2>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    <time dateTime="2024-09-15">September 15, 2024</time> | 9:00
                    AM - 4:00 PM
                  </p>
                  <p className="text-base font-medium">
                    Rajendara College, Faridpur
                  </p>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Rajendara College Road, Faridpur, Bangladesh
                  </p>
                  <p className="text-base leading-relaxed">
                    Join us for a Blood Drive event at Rajendara College,
                    Faridpur. Your donation can save lives!
                  </p>
                </div>
              </section>
              <Image
                alt="Event cover"
                className="rounded-lg object-cover"
                height={250}
                width={400}
                src="https://source.unsplash.com/person-in-red-sweater-holding-babys-hand-Zyx1bK9mqmA"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
              />
              <Button className="w-36">View Details</Button>
            </CardContent>
          </Card>

          <Card className="mx-auto max-w-4xl">
            <CardContent className="mt-5 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
              <section>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    Charity Auction
                  </h2>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    <time dateTime="2024-10-20">October 20, 2024</time> | 6:00
                    PM - 9:00 PM
                  </p>
                  <p className="text-base font-medium">
                    Community Center, Dhaka
                  </p>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Dhaka, Bangladesh
                  </p>
                  <p className="text-base leading-relaxed">
                    Join us for an exciting Charity Auction event at the
                    Community Center in Dhaka. Bid on unique items and support a
                    great cause!
                  </p>
                </div>
              </section>
              <Image
                alt="Event cover"
                className="rounded-lg object-cover"
                height={250}
                width={400}
                src="https://source.unsplash.com/hands-formed-together-with-red-heart-paint-cAtzHUz7Z8g"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
              />
              <Button className="w-36">View Details</Button>
            </CardContent>
          </Card>

          <Card className="mx-auto max-w-4xl">
            <CardContent className="mt-5 grid grid-cols-1 items-center gap-5 md:grid-cols-2">
              <section>
                <div className="space-y-2">
                  <h2 className="text-xl font-semibold tracking-tight">
                    Environmental Cleanup
                  </h2>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    <time dateTime="2024-11-05">November 5, 2024</time> | 8:00
                    AM - 12:00 PM
                  </p>
                  <p className="text-base font-medium">Dhaka Riverfront</p>
                  <p className="text-sm leading-none text-gray-500 dark:text-gray-400">
                    Dhaka, Bangladesh
                  </p>
                  <p className="text-base leading-relaxed">
                    Join us for an Environmental Cleanup event along the Dhaka
                    Riverfront. Let&apos;s work together to keep our environment
                    clean and beautiful!
                  </p>
                </div>
              </section>
              <Image
                alt="Event cover"
                className="rounded-lg object-cover"
                height={250}
                width={400}
                src="https://source.unsplash.com/a-group-of-people-standing-next-to-a-river-CxL29J-aM5E"
                style={{
                  aspectRatio: "400/250",
                  objectFit: "cover",
                }}
              />
              <Button className="w-36">View Details</Button>
            </CardContent>
          </Card>
        </section>
      </MaxWidthWrapper>
      <Footer />
    </>
  );
}
