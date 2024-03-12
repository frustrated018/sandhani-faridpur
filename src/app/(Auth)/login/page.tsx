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
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <Card className="w-full max-w-[400px] bg-transparent text-white backdrop-blur-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-2">
          <div>
            <Label htmlFor="email">Eamil:</Label>
            <Input />
          </div>
          <div>
            <Label htmlFor="password">Password:</Label>
            <Input />
          </div>
          <section className="flex items-center gap-2">
            <Button
              type="submit"
              variant="outline"
              className="text-secondary-foreground"
            >
              Login with Email
            </Button>
            <span className="font-bold">Or</span>
            <Button
              className="items-center gap-1 text-secondary-foreground"
              variant="outline"
            >
              <FcGoogle size={20} />
              Login with Goolge
            </Button>
          </section>
        </form>
      </CardContent>
      <CardFooter>
        <div className="flex items-center gap-1">
          Don&apos;t have an account? Make one
          <Link
            href="/sign-up"
            className="flex items-center underline hover:font-semibold hover:text-white"
          >
            Here <ArrowTopRightIcon />
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default Login;
