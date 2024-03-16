import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export default async function Profile() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    <>
      <div className="flex items-center gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              {!user && (
                <>
                  <AvatarImage
                    src={
                      "https://source.unsplash.com/a-close-up-of-a-blue-and-yellow-liquid-F573ZRbKOEw"
                    }
                  />
                  <AvatarFallback className="bg-blue-200 font-cabinate-grotesk text-xl font-semibold">
                    DP
                  </AvatarFallback>
                </>
              )}

              {user && (
                <>
                  <AvatarImage src={user ? user?.picture || "" : ""} />
                  <AvatarFallback className="bg-blue-200 font-cabinate-grotesk text-xl font-semibold">
                    {user?.given_name?.[0]}
                  </AvatarFallback>
                </>
              )}
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>
              {user ? user.given_name : "No User"}
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            {user ? (
              <DropdownMenuItem asChild>
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
    </>
  );
}

//! Mobile version of profile

export async function MobileProfile() {
  const { getUser } = getKindeServerSession();

  const user = await getUser();

  return (
    // TODO: Turn these buttons into sheet trigger to close the sheet upon click
    <>
      <div className="my-5 flex items-center justify-center">
        <Avatar>
          {!user && (
            <>
              <AvatarImage
                src={
                  "https://source.unsplash.com/a-close-up-of-a-blue-and-yellow-liquid-F573ZRbKOEw"
                }
              />
              <AvatarFallback className="bg-blue-200 font-cabinate-grotesk text-xl font-semibold">
                DP
              </AvatarFallback>
            </>
          )}

          {user && (
            <>
              <AvatarImage src={user ? user?.picture || "" : ""} />
              <AvatarFallback className="bg-blue-200 font-cabinate-grotesk text-xl font-semibold">
                {user?.given_name?.[0]}
              </AvatarFallback>
            </>
          )}
        </Avatar>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Button variant="outline">Dashboard</Button>
        <Button variant="outline">My Donation</Button>
        {user ? (
          <LogoutLink className={buttonVariants({ variant: "outline" })}>
            Logout
          </LogoutLink>
        ) : (
          <LoginLink className={buttonVariants({ variant: "outline" })}>
            Login
          </LoginLink>
        )}
      </div>
    </>
  );
}
