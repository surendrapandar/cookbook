import logo from "../img/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth/AuthContext";
import { useContext } from "react";
import { Button } from "./ui/button";

const Navbar = () => {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  return (
    <nav className="bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <span className="text-white font-semibold text-lg ml-20">
          <img className="w-11 h-10" src={logo} alt="" />
        </span>
      </div>
      <div className="flex items-center space-x-6 mr-20">
        <Link to="/" className="text-gray-300 hover:text-white">
          {" "}
          Home{" "}
        </Link>
        {token ? (
          <>
            <Link to="/recipes" className="text-gray-300 hover:text-white">
              Recipes
            </Link>
            <Link to="/favorite" className="text-gray-300 hover:text-white">
            Favorite❤
            </Link>
            <Button  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline">
              <Link to="/create-recipes">Create Recipe</Link>
            </Button>
            <Button
              variant={"destructive"}
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/")
                window.location.reload();
              }}
            >
              Logout
            </Button>
          </>
        ) : (
          <>
            <Link to="/login" className="text-gray-300 hover:text-white">
              {" "}
              Login{" "}
            </Link>
            <Link to="/signup" className="text-gray-300 hover:text-white">
              {" "}
              Sing-Up{" "}
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
