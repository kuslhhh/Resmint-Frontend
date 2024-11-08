    import { Form } from "@/components/Auth";
import { useState } from "react";

export const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    return (
      <Form
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        onSubmit={() => {}}
        label={"Login"}
        link={"Register"}
        description={"Enter your credentials to login to your account"}
        linktext={"Not have an account?"}
        linkpath="/register"
      />
    );
  };
  