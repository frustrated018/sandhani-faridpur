"use client";
import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardHeader,
  CardTitle,
  Card,
  CardFooter,
} from "@/components/ui/card";
import { toast } from "sonner";
type ReqCardProps = {
  data: {
    title: string;
    available: number;
    phone?: string;
  };
};

const ReqCard = ({ data: { title, available, phone } }: ReqCardProps) => {
  const phoneNumber = phone || "";

  const copyPhoneNumber = async () => {
    try {
      await navigator.clipboard.writeText(phoneNumber);
      toast.info("Number copied to clipboard.", {
        description: `The phone number for blood group ${title} has been copied. We are available 24/7 so feel free to call anytime`,
        duration: 5000,
      });
    } catch (err) {
      toast.error("Failed to copy. Please try again.");
    }
  };

  return (
    <Card className="bg-secondary">
      <CardHeader>
        <CardTitle className="text-2xl text-red-500">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <h3 className="text-xl">Available Now: {available} bags</h3>
      </CardContent>
      <CardFooter>
        <Button onClick={copyPhoneNumber}>Call Now</Button>
      </CardFooter>
    </Card>
  );
};

export default ReqCard;
