"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react";

//TODO: Future issue: When the user signs up with Google there is no blood type!! So need to account for that when creating db!!

export default function SignUp() {
  const [avatarUrl, setAvatarUrl] = useState("");

  return (
    <Card className="my-10 w-full max-w-[400px] bg-transparent text-white backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Sign Up</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-4">
          <section className="flex items-center gap-2">
            <div>
              <Label htmlFor="name">Name:</Label>
              <Input />
            </div>
            <div>
              <Label htmlFor="group">Blood Group:</Label>
              <Select>
                <SelectTrigger className="w-[160px]">
                  <SelectValue placeholder="Blood Group" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="A+">A+</SelectItem>
                  <SelectItem value="A-">A-</SelectItem>
                  <SelectItem value="B+">B+</SelectItem>
                  <SelectItem value="B-">B-</SelectItem>
                  <SelectItem value="AB+">AB+</SelectItem>
                  <SelectItem value="AB-">AB-</SelectItem>
                  <SelectItem value="O+">O+</SelectItem>
                  <SelectItem value="O-">O-</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </section>
          {/* Picture Uploader */}
          <div>
            <Label htmlFor="photo">Profile Picture:</Label>
            <>
              {!avatarUrl && (
                <UploadDropzone
                  endpoint="signupUploader"
                  appearance={{
                    button: {
                      backgroundColor: "#dc2626",
                    },
                    label: {
                      color: "#dc2626",
                    },
                    container: {
                      backgroundColor: "#f3f4f6",
                      border: "none",
                    },
                  }}
                  content={{
                    allowedContent: "MAX img size 2MB",
                    label: "Choose file or drag & drop",
                  }}
                  onClientUploadComplete={(res) => {
                    // Do something with the response
                    // console.log(res[0].url);
                    toast.success("Upload Completed");
                    setAvatarUrl(res[0].url);
                  }}
                  onUploadError={(error: Error) => {
                    // Do something with the error.
                    toast.error(`Failed to uplaod image!`, {
                      description: `${error.message}`,
                    });
                  }}
                />
              )}
              {avatarUrl && (
                <div className="rounded-xl">
                  <Image
                    className="rounded-xl"
                    src={avatarUrl}
                    alt="profile picture"
                    height={100}
                    width={100}
                  />
                </div>
              )}
            </>
          </div>
          <div>
            <Label htmlFor="email">Eamil:</Label>
            <Input />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input />
          </div>
          <section className="flex flex-col items-center gap-2">
            <Button
              type="submit"
              variant="outline"
              className="w-48 items-center gap-1 text-secondary-foreground"
            >
              <MdEmail size={20} />
              Sign up with Email
            </Button>
            <span className="flex items-center gap-2 font-bold ">
              <Separator className="w-[60px]" />
              Or
              <Separator className="w-[60px]" />
            </span>
            <Button
              className="w-48 items-center gap-1 text-secondary-foreground"
              variant="outline"
            >
              <FcGoogle size={20} />
              Sign up with Goolge
            </Button>
          </section>
        </form>
      </CardContent>

      <CardFooter>
        <div className="flex flex-wrap items-center gap-1">
          Already have an account? Log in
          <Link
            href="/login"
            className="flex items-center underline hover:font-semibold hover:text-white"
          >
            Here <ArrowTopRightIcon />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
