import { Link } from "react-router-dom";
import ThemeSwitch from "./ThemeSwitch";

function Navebar() {
  return (
    <nav className="flex justify-between w-screen h-16 bg-transparent shadow-xl ">
      <div className="flex items-center justify-start p-2 mx-2">
        <Link to="/" className="px-2 mx-2 text-2xl text-cyan-400">
          Logo
        </Link>
      </div>
      <div className="flex flex-row ">
        <div className="flex items-center justify-around px-4">
          <Link to="/" className="px-2 mx-2 ">
            Home
          </Link>
          <Link to="/contact" className="px-2 mx-2 ">
            Contact
          </Link>

          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}

export default Navebar;
