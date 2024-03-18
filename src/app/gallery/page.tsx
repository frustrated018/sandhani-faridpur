import Footer from "@/components/Footer/Footer";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";
import SectionTitle from "@/components/SectionTitle";
import Image from "next/image";

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper className="my-10">
        <SectionTitle
          title="Photo Gallery"
          subTitle="Sharing some of our wins along the way. A page to remind us why we do this in the first place."
        />
        <div className="mt-10 grid grid-cols-1 gap-2 md:grid-cols-3">
          <Image
            alt="Photo 1"
            className="aspect-photo rounded-md border border-gray-200 object-cover dark:border-gray-800"
            height={800}
            width={1200}
            src="https://source.unsplash.com/group-of-people-taking-photo-near-brown-wooden-tree-1qfy-jDc_jo"
          />
          <Image
            alt="Photo 2"
            className="aspect-photo rounded-md border border-gray-200 object-cover dark:border-gray-800"
            height={800}
            width={1200}
            src="https://source.unsplash.com/two-men-hugging-on-focus-photography-7KhbREQPFD4"
          />
          <Image
            alt="Photo 3"
            className="aspect-photo rounded-md border border-gray-200 object-cover dark:border-gray-800"
            height={800}
            width={1200}
            src="https://source.unsplash.com/standing-and-sitting-of-people-taking-group-photo-O9Ogddfvl-U"
          />
          <Image
            alt="Photo 4"
            className="aspect-photo rounded-md border border-gray-200 object-cover dark:border-gray-800"
            height={800}
            width={1200}
            src="https://source.unsplash.com/group-of-people-near-bonfire-near-trees-during-nighttime-fDostElVhN8"
          />
          <Image
            alt="Photo 5"
            className="aspect-photo rounded-md border border-gray-200 object-cover dark:border-gray-800"
            height={800}
            width={1200}
            src="https://source.unsplash.com/group-of-teenager-taking-group-photo-dQBkIZzyM-4"
          />
          <Image
            alt="Photo 6"
            className="aspect-photo rounded-md border border-gray-200 object-cover dark:border-gray-800"
            height={800}
            width={1200}
            src="https://source.unsplash.com/person-in-blue-long-sleeve-shirt-maYeMl3xCrY"
          />
        </div>
      </MaxWidthWrapper>

      <Footer />
    </>
  );
}
