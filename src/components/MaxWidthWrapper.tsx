import { cn } from "@/lib/utils";
import { ReactNode } from "react";
const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-2.5 md:px-10", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
