import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="text-[#fa9977] flex justify-between items-center ">
      <div className=" flex ">
        <img src="/arc.png" alt="" className="w-11 h-11 mx-2 " />
        <h1 className="font-bold text-4xl">Resmint</h1>
      </div>
      <div className="flex items-center gap-4">
        <Link to="/">Home</Link>
        <Link to="/create">Create </Link>
        <Link to="/saved">Saved </Link>
      </div>
      <div className="font-medium gap-4" >
        <Link to="/auth" className="rounded-full bg-[#F94C03] text-[#2a2d34] p-2 px-5 py-3 ">Sign up</Link>
        <Link to="/auth" className="text-[#fa9977] mx-2 ">Login</Link>
      </div>
    </div>
  );
};
