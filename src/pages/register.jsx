import { Form } from "@/components/Auth";
import { useState } from "react";
import axios from "axios";

export const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:3001/auth/register", {
        username,
        password,
      });
      alert("Registered successfully");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        onSubmit={onSubmit}
        label={"Sign up"}
        link={"login"}
        description={"Enter your credential to Register"}
        linkpath="/login"
        linktext={"Already have an account?"}
      />
    </>
  );
};
