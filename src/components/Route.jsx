import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { Auth } from "../pages/auth";
import { Create } from "../pages/createRecipe";
import { Saved } from "../pages/savedRecipe";
import { Navbar } from "./Navbar";
import { Login } from "@/pages/login";
import { Signup } from "@/pages/register";

export const RoutePages = () => {
  return (
    <>
      <div>
        <Router>
          <Navbar />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/create" element={<Create />} />
              <Route path="/saved" element={<Saved />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </>
  );
};
