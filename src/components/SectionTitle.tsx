import { cn } from "@/lib/utils";

interface sectionTitleProps {
  title: string;
  subTitle?: string;
  className?: string;
}

const SectionTitle = ({ title, subTitle, className }: sectionTitleProps) => {
  return (
    <div className={cn("max-w-[600px] text-center", className)}>
      <h1 className="font-cabinate-grotesk text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        {title}
      </h1>
      <p className="mx-auto max-w-[500px] md:text-xl">{subTitle}</p>
    </div>
  );
};

export default SectionTitle;
