"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { SlLogin, SlLogout } from "react-icons/sl";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function Profile() {
  const { user, isAuthenticated, isLoading, getPermissions } =
    useKindeBrowserClient();

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage
              src={
                user
                  ? user.picture!
                  : "https://source.unsplash.com/a-close-up-of-a-blue-and-yellow-liquid-F573ZRbKOEw"
              }
            />
            <AvatarFallback className="bg-primary font-cabinate-grotesk text-xl font-semibold text-white">
              {user?.given_name?.[0]}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>
            {user ? user.given_name : "No User"}
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {user ? (
            <DropdownMenuItem
              onClick={() => toast.success("Logout Successfull")}
            >
              <LogoutLink>Logout</LogoutLink>
            </DropdownMenuItem>
          ) : (
            <DropdownMenuItem asChild>
              <LoginLink>Sign in</LoginLink>
            </DropdownMenuItem>
          )}

          <DropdownMenuItem>Dashboard</DropdownMenuItem>
          <DropdownMenuItem>My Donation</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

//! Mobile version of profile

export function MobileProfile() {
  const [user, setUser] = useState(false);
  const router = useRouter();

  const handleUser = () => {
    user
      ? toast.info("Working on it")
      : toast.error("Please Login!", {
          description: "Can't acccess this route without loggin in.",
        });
  };

  return (
    // TODO: Turn these buttons into sheet trigger to close the sheet upon click
    <>
      <div className="my-5 flex items-center justify-center">
        <Avatar>
          <AvatarImage src="https://source.unsplash.com/hands-formed-together-with-red-heart-paint-cAtzHUz7Z8g" />
          <AvatarFallback>DP</AvatarFallback>
        </Avatar>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline" onClick={() => setUser(!user)}>
          Change State
        </Button>
        <Button variant="outline" onClick={handleUser}>
          Dashboard
        </Button>
        <Button variant="outline" onClick={handleUser}>
          My Donation
        </Button>
        {user ? (
          <Button className="gap-2">
            Logout <SlLogout />
          </Button>
        ) : (
          <LoginLink>Sign in</LoginLink>
        )}
      </div>
    </>
  );
}
