"use client";
import MaxWidthWrapper from "../MaxWidthWrapper";
import SectionTitle from "../SectionTitle";
import { Card, CardContent, CardFooter, CardHeader } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { PiQuotes } from "react-icons/pi";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

export default function Testimonial() {
  const bloodDonationQuotes = [
    {
      quote:
        "Donating blood not only saves lives but also gives me a sense of purpose. I'm grateful for the opportunity to contribute to my community.",
      quoter: "Sadia Rahman",
      date: "June, 2021",
    },
    {
      quote:
        "When my father needed blood urgently, Sandhani was there for us. Their prompt support saved my father's life. I'm forever indebted to them.",
      quoter: "Mohammad Ali",
      date: "July, 2021",
    },
    {
      quote:
        "I used to be afraid of needles, but knowing that my blood can help someone in need gives me the courage to donate regularly. Sandhani's team at Faridpur branch makes the process easy and comfortable.",
      quoter: "Sara Ahmed",
      date: "January, 2022",
    },
    {
      quote:
        "As a regular blood donor, I've seen firsthand the impact it can have on others' lives. Sandhani's commitment to organizing blood donation drives ensures that there's always enough blood available for those in need.",
      quoter: "Rahim Khan",
      date: "March, 2022",
    },
    {
      quote:
        "Donating blood is not just an act of kindness; it's a lifeline for those in need. Every time I donate, I feel like I'm making a tangible difference in someone's life. Sandhani's Faridpur branch has made the process seamless and rewarding.",
      quoter: "Fatima Khan",
      date: "April, 2022",
    },
    {
      quote:
        "Being a blood donor isn't about recognition; it's about giving hope and saving lives. Sandhani, Faridpur, exemplifies this spirit. Their dedication to organizing blood drives ensures that no one in our community suffers due to a shortage of blood.",
      quoter: "Ahmed Hassan",
      date: "August, 2022",
    },
    {
      quote:
        "I never realized the impact a simple act like donating blood could have until I saw it firsthand. Sandhani, Faridpur, deserves immense praise for their tireless efforts in saving lives and spreading awareness about the importance of blood donation.",
      quoter: "Sakina Begum",
      date: "October, 2022",
    },
    {
      quote:
        "As a recipient of donated blood myself, I can't express enough gratitude to Sandhani, Faridpur, and all the donors who selflessly give to help others. Your generosity not only saved my life but also restored my faith in humanity. Thank you.",
      quoter: "Rahul Sharma",
      date: "December, 2022",
    },
  ];

  const plugin = React.useRef(Autoplay({ delay: 3000 }));

  return (
    <MaxWidthWrapper>
      <SectionTitle
        title="Testimonials"
        subTitle="Here are some of the quotes from people who we've helped over time"
      />

      <section className="my-10">
        <Carousel opts={{ loop: true }} plugins={[plugin.current]}>
          <CarouselContent>
            {bloodDonationQuotes.map((quote, idx) => (
              <CarouselItem
                key={quote.date + idx}
                className="mx-auto max-w-2xl"
              >
                <Card>
                  <CardHeader>
                    <PiQuotes size={50} />
                  </CardHeader>
                  <CardContent>
                    <p className="">{quote.quote}</p>
                  </CardContent>
                  <CardFooter className=" gap-2">
                    <h5 className="font-medium">- {quote.quoter}</h5>
                    <span>|</span>
                    <p>{quote.date}</p>
                  </CardFooter>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
    </MaxWidthWrapper>
  );
}
