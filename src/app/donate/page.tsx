import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";

const DonatePage = () => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <section>
          <h4 className="mt-10 text-center font-cabinate-grotesk text-4xl font-bold">
            This will be the <span className="text-green-500">Donate</span> page{" "}
            <br />
            <span className="text-red-600"> [Protected Route]</span>
          </h4>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default DonatePage;
