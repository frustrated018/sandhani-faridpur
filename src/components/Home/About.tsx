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
            <p className="mt-10 text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis obcaecati odit vero hic reiciendis? Error sunt
              accusantium explicabo deserunt ipsum quidem quis nemo et
              exercitationem asperiores facere eos tempora numquam fuga
              dignissimos nihil blanditiis ut ipsa, ullam, excepturi voluptates.
              Autem totam cupiditate beatae recusandae, voluptate doloremque
              quas assumenda. Quo perferendis cum, natus ipsa magni ipsam
              commodi iure consectetur dignissimos iste! Voluptatum ex, eum fuga
              ea nihil animi odio omnis accusantium officia fugiat impedit quia
              nesciunt maxime possimus doloremque. Officia, voluptatibus
              doloribus eligendi perspiciatis itaque eos iusto maxime quidem
              pariatur voluptates, deserunt esse quae. Architecto, minima.
              Eligendi suscipit dolorem vitae dicta.
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
