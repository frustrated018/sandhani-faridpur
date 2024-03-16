import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Navbar from "@/components/Nav/Navbar";

const RequestPage = () => {
  return (
    <>
      <Navbar />
      <MaxWidthWrapper>
        <section>
          <h4 className="text-center font-cabinate-grotesk text-4xl font-bold mt-10">
            This will be the Request page <br /><span className="text-red-600"> [Protected Route]</span>
          </h4>
        </section>
      </MaxWidthWrapper>
    </>
  );
};

export default RequestPage;
