import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Login = () => {
  return (
    <Card className="w-full max-w-sm bg-transparent text-white backdrop-blur-lg">
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
          <Button
            type="submit"
            variant="outline"
            className="text-secondary-foreground"
          >
            Login with Email
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Login;
