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
import { SlLogin } from "react-icons/sl";

export default function Profile() {
  return (
    <div className="flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>User Name</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <Link href="/login">
            <DropdownMenuItem className="gap-2">
              Login <SlLogin />
            </DropdownMenuItem>
          </Link>
          <DropdownMenuItem>Dashboard</DropdownMenuItem>
          <DropdownMenuItem>My Donation</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
