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
import { Login } from "@/pages/login";
import { Signup } from "@/pages/register";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

export const AuthPage = () => {
  return (
    <div className="flex justify-center">
      <Login />
      <Signup />
    </div>
  );
};

export const Form = ({
  username,
  setUsername,
  password,
  setPassword,
  onSubmit,
  label,
  link,
  description,
  linkpath,
  linktext,
}) => {
  return (
    <motion.div
      whileInView={{ opacity: 1, x: 50 }}
      initial={{ opacity: 0, x: 0  }}
      transition={{ duration: 1 }}
      className="flex flex-col items-center justify-center py-36 pr-20 md:pr-10 text-[#2a2d34]"
    >
      <Card className="w-[300px] md:w-[350px] bg-[#1F1F1F] border-[#484f5c]">
        <CardHeader>
          <CardTitle className="text-center text-white text-xl">
            {label}
          </CardTitle>
          <CardDescription className="text-center text-sm text-[#fa9977]">
            {description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col text-white space-y-1.5">
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
              <div className="flex flex-col space-y-1.5 text-white">
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
        <CardFooter className="flex flex-col">
          <div>
            <h1 className="cursor-default mb-5 text-white text-sm">
              {linktext} {"  "}
              <Link
                to={linkpath}
                className="text-[#fa9977] text-base relative inline-block
             after:absolute after:left-0 after:-bottom-0 after:w-0 after:h-[1px] 
             after:bg-[#fa9977] after:transition-all after:duration-500 hover:after:w-full"
              >
                {label}
              </Link>
            </h1>
          </div>
          <div className="flex space-x-32">
            <Button className="text-[#2a2d34] bg-[#fa9977]" onClick={onSubmit}>
              {label}
            </Button>
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
};
