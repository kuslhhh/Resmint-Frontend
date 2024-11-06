import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useState } from "react";
import axios from "axios";

export const AuthPage = () => {
  return (
    <div>
      <Login />
      <Signup />
    </div>
  );
};

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  
  return (
    <div className="flex flex-col items-center justify-center py-44 text-[#2a2d34]">
      <Card className="w-[350px] bg-[#d7dae0] border-[#484f5c]">
        <CardHeader>
          <CardTitle className="text-center text-xl">Sign up</CardTitle>
          <CardDescription className="text-center text-sm">
            Enter your credentials to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form >
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">Name</Label>
                <Input
                  type="text"
                  id="name"
                  placeholder="Username"
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                  className="border-[#484f5c]"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  type="password"
                  id="name"
                  placeholder="Password"
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                  className="border-[#484f5c]"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" className="hover:bg-[#676f80]">Login</Button>
          <Button className="text-[#2a2d34] bg-[#fa9977]" onClick={onSubmit}>Register</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

const Login = () => {
  return (
    <div>
      <h1></h1>
    </div>
  );
};
