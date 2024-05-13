import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "@/context/auth/AuthContext";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";

type LoginPageProps = {
  nameField?: boolean;
};

const LoginPage: React.FC<LoginPageProps> = ({ nameField = false }) => {
  const navigate = useNavigate()
  const { token, setToken } = useContext(AuthContext);
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    localStorage.getItem("token");
  }, [token]);

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data.access_token);
      localStorage.setItem("token", data.access_token);
      setToken(`${data.access_token}`);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSingup = async () => {
    console.log("Signup clicked");
    try {
      const response = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });
      const data = await response.json();
      console.log(data);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Navbar />
      <div className=" mt-36 flex items-center justify-center bg-gray-80">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-6">
          {nameField ? "SignUp" : "Login"}
        </h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            {
              nameField ? handleSingup() : handleLogin();
            }
          }}
        >
          {nameField && (
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-gray-700 font-semibold mb-2"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border-gray-300 bg-gray-50 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
                value={username}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
          )}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-semibold mb-2"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className="w-full border-gray-300 bg-gray-50 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700  font-semibold mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full border-gray-300 bg-gray-50 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
          >
            {nameField ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
    </div>
  );
};

export default LoginPage;
