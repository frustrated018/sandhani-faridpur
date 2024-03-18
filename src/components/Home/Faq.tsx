import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionTitle from "../SectionTitle";

const Faq = () => {
  const bloodDonationFAQ = [
    {
      question: "What is blood donation?",
      answer:
        "Blood donation is the process of voluntarily giving blood, typically through a process called phlebotomy, where blood is drawn from a donor's vein using a needle. The donated blood is then used for various medical purposes, such as transfusions during surgery, for treating medical conditions, or for research purposes.",
    },
    {
      question: "Who can donate blood?",
      answer:
        "Generally, individuals who are in good health, weigh at least 110 pounds (50 kg), and are at least 16 or 17 years old (depending on local regulations) are eligible to donate blood. There may be additional criteria or restrictions depending on factors such as medical history, recent travel, or specific health conditions.",
    },
    {
      question: "How often can I donate blood?",
      answer:
        "The frequency of blood donation depends on local regulations and guidelines, as well as individual health factors. In many places, whole blood donors can typically donate every 8 to 12 weeks, while those donating specific blood components like platelets or plasma may have different donation intervals.",
    },
    {
      question: "Does blood donation have any health benefits for the donor?",
      answer:
        "Yes, blood donation can have health benefits for the donor, including the potential to reduce the risk of certain diseases by removing excess iron from the body. Additionally, some donors report feeling a sense of satisfaction and well-being from knowing they have helped save lives.",
    },
    {
      question: "Are there any risks associated with blood donation?",
      answer:
        "While blood donation is generally safe for most donors, there are some risks involved, such as minor bruising or discomfort at the donation site. In rare cases, donors may experience more serious side effects such as dizziness, fainting, or infection. However, blood donation centers take precautions to minimize these risks and ensure donor safety.",
    },
    {
      question: "How is donated blood used?",
      answer:
        "Donated blood can be used in various medical situations, including emergency trauma care, surgeries, treatment of medical conditions such as anemia or cancer, and for patients with certain blood disorders. Blood donations are also used for research purposes to develop new treatments and medical technologies.",
    },
    {
      question: "Can I donate blood if I have a tattoo or piercing?",
      answer:
        "In many cases, individuals with tattoos or piercings are still eligible to donate blood, as long as the tattoo or piercing was performed in a licensed facility using sterile equipment and in compliance with local regulations. However, there may be temporary deferrals depending on the timing of the tattoo or piercing.",
    },
    {
      question: "Can I donate blood if I'm taking medication?",
      answer:
        "It depends on the medication you are taking. Some medications may not disqualify you from donating blood, while others may require a temporary deferral. It's important to inform the blood donation center staff about any medications you are currently taking, and they can advise you on eligibility.",
    },
  ];

  return (
    <MaxWidthWrapper className="my-5 mb-10">
      <SectionTitle
        title="FAQ"
        subTitle="A collection of questions that we get the most."
      />
      <div>
        <Accordion
          type="single"
          collapsible
          className="mx-auto md:max-w-lg xl:max-w-xl"
        >
          {bloodDonationFAQ.map((faq, idx) => (
            <AccordionItem key={faq.question + idx} value={`item-${idx}`}>
              <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MaxWidthWrapper>
  );
};

export default Faq;
