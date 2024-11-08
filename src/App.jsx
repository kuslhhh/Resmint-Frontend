import "./App.css";
import { RoutePages } from "./components/Route";

function App() {
  return (
    <>
      <div className="bg-[#2a2d34] h-screen">
        <div className="px-10 md:px-32 py-5">
          <RoutePages />
        </div>
      </div>
    </>
  );
}

export default App;
