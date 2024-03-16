import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

const About = () => {
  const infoCardData = [
    {
      title: "Blood Donations Collected",
      description: "Units of blood collected",
      count: "50,000+",
    },
    {
      title: "Donors Engaged",
      description: "Individuals contributing to blood donations",
      count: "2000+",
    },
    {
      title: "Volunteer Hours",
      description: "Hours contributed by volunteers",
      count: "5000+",
    },
    {
      title: "Life-Saving Operations",
      description: "Number of lives saved through blood transfusions",
      count: "1000+",
    },
  ];

  return (
    <MaxWidthWrapper className="min-h-screen py-10">
      <Card className="grid grid-cols-1 lg:grid-cols-2">
        {/* //! Text section */}
        <section className="w-full border-r">
          <div className="p-5">
            <h2 className="font-cabinate-grotesk text-5xl font-bold capitalize md:text-7xl">
              Saving <span className="text-red-600">Lives</span> one donation at
              a time
            </h2>
            <p className="mt-6 text-lg">
              Certainly! Below is an example of a story you can use to replace
              the Lorem Ipsum text: In the heart of our bustling city, our blood
              bank began its journey with a simple yet profound mission: to save
              lives, one donation at a time. It all started back in 2010 when a
              group of passionate individuals came together with a shared vision
              of making a difference in their community. Since our humble
              beginnings, we&apos;ve collected over 50,000 units of blood,
              thanks to the unwavering support of our dedicated donors. Each
              drop of blood represents a lifeline for those in need, and
              we&apos;ve been fortunate to engage with over 2000 donors who have
              selflessly given of themselves to help others. Behind every
              successful donation lies countless hours of volunteer work, and
              our volunteers have contributed more than 5000 hours of their time
              to support our cause. Their commitment and enthusiasm fuel our
              efforts every day. But the true measure of our impact lies in the
              lives we&apos;ve saved. Through blood transfusions, we&apos;ve
              played a role in over 1000 life-saving operations, offering hope
              and healing to those facing medical emergencies. As we look to the
              future, our resolve remains steadfast. We will continue to strive
              towards our goal of ensuring a stable blood supply for our
              community, because we believe that together, we can make a
              difference and save even more lives.
            </p>
          </div>
        </section>
        {/* //! Image Section */}
        <section className="w-full p-5">
          <div className="relative mx-auto aspect-video max-w-md overflow-hidden rounded-xl">
            <Image
              src="https://source.unsplash.com/red-and-white-coca-cola-bus-on-road-during-daytime-PH0is6bn98c"
              alt="about section image"
              fill
              className="object-cover object-center"
              priority={false}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="mt-5 grid grid-cols-1 gap-2 sm:grid-cols-2">
            {infoCardData.map((card, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl">{card.title}</CardTitle>
                  <CardDescription className="text-base">
                    {card.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <h3 className="text-4xl">{card.count}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </Card>
    </MaxWidthWrapper>
  );
};

export default About;
