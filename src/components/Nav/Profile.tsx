"use client";
import Link from "next/link";
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

export default function Profile() {
  const [user, setUser] = useState(false);

  const handleUser = () => {
    user
      ? toast.info("Working on it")
      : toast.error("Please Login!", {
          description: "Can't acccess this route without loggin in.",
        });
  };

  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://source.unsplash.com/hands-formed-together-with-red-heart-paint-cAtzHUz7Z8g" />
            <AvatarFallback>DP</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>{user ? "John Doe" : "No User"}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {user ? (
            <DropdownMenuItem className="gap-2">
              Logout <SlLogout />
            </DropdownMenuItem>
          ) : (
            <Link href="/login">
              <DropdownMenuItem className="gap-2">
                Login <SlLogin />
              </DropdownMenuItem>
            </Link>
          )}
          <DropdownMenuItem onClick={() => setUser(!user)}>
            Change State
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleUser}>Dashboard</DropdownMenuItem>
          <DropdownMenuItem onClick={handleUser}>My Donation</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
