import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link, useNavigate } from "react-router-dom";
import PasswordInput from "../../components/Input/PasswordInput";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // error check for email
    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // error check for password blank
    if (!password) {
      setError("Please enter a password");
      return;
    }

    // to remove the previous error message
    setError("");

    // TODO-> Login API call

    try {
      const response = await axiosInstance.post("/login", {
        email: email,
        password: password,
      });

      if (response.data && response.data.accessToken) {
        localStorage.setItem("token", response.data.accessToken);
        navigate("/dashboard");
        // redirect to home page
      }
    } catch (error) {
      // handle login error
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        setError(error.response.data.message);
      } else {
        setError("An unexpected error occurred. Please try again later.");
      }
    }

    
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-20">
        <div className="py-10 bg-white border rounded w-96 px-7">
          <form onSubmit={handleLogin}>
            <h4 className="mb-2 text-2xl">Login</h4>
            {/* style-> index.css */}
            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <PasswordInput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* Error on invalid Email */}
            {error && <p className="pb-1 text-xs text-red-500">{error}</p>}
            <button type="submit" className="btn-primary">
              Login
            </button>
            <p className="mt-4 text-sm text-center">
              Not registered yet?{" "}
              {/* here blue color is from tailwind config file */}
              <Link to="/signup" className="font-medium underline text-primary">
                Create an Account
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
