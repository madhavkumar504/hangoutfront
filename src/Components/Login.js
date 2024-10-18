import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import loginServices from "../Services/loginServices";
import SuccessPopup from "./Common/SuccessPopup";

function Login() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleClosePopup = () => {
    setSuccessMessage("");
  };

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSuccessMessage("");

    try {
      const response = await loginServices.login({
        email: formData.email,
        password: formData.password,
      });
      localStorage.setItem("token", response.data.access_token);

      // Redirect to the dashboard
      navigate("/dashboard");

      setSuccessMessage("User Logged In Successfully");
      // console.log("login", response);
    } catch (err) {
      if (err?.error) {
        const apiErrors = err?.error;

        setErrors({
          email: apiErrors.email ? apiErrors.email[0] : "",
          password: apiErrors.password ? apiErrors.password[0] : "",
        });
      } else {
        setErrors({
          general: "An unexpected error occurred. Please try again later.",
        });
      }
    }
  };
  return (
    <div className="flex items-center min-h-screen p-4 bg-gradient-to-r from-blue-500 to-purple-600 lg:justify-center">
      <div className="flex flex-col overflow-hidden bg-white rounded-md shadow-xl md:flex-row md:flex-1 lg:max-w-screen-md">
        <div className="p-4 py-6 text-white bg-gradient-to-b from-blue-700 to-blue-500 md:w-80 md:flex-shrink-0 md:flex md:flex-col md:items-center md:justify-evenly">
          <div className="my-3 text-4xl font-bold tracking-wider text-center">
            <a href="\#">Welcome Back!</a>
          </div>
          <p className="mt-6 text-center text-gray-200">
            Log in to access your personalized dashboard and explore.
          </p>
          <p className="flex flex-col items-center justify-center mt-10 text-center">
            <span>Don't have an account?</span>
            <Link to="/" className="underline hover:text-blue-300">
              Sign up here
            </Link>
          </p>
          <p className="mt-6 text-sm text-center text-gray-300">
            Read our{" "}
            <a href="\#" className="underline hover:text-gray-100">
              terms
            </a>{" "}
            and{" "}
            <a href="\#" className="underline hover:text-gray-100">
              conditions
            </a>
          </p>
        </div>
        <div className="p-5 bg-white md:flex-1">
          <h3 className="my-4 text-2xl font-semibold text-gray-700 text-center">
            Login to Your Account
          </h3>
          <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
            <div className="flex flex-col space-y-1">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-gray-500"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                autoFocus
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                placeholder="Enter your email"
                name="email"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <div className="flex flex-col space-y-1">
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-gray-500"
                >
                  Password
                </label>
                <a
                  href="\#"
                  className="text-sm text-blue-500 hover:underline focus:text-blue-800"
                >
                  Forgot Password?
                </a>
              </div>
              <input
                type="password"
                id="password"
                className="px-4 py-2 transition duration-300 border border-gray-300 rounded-lg focus:border-transparent focus:outline-none focus:ring-4 focus:ring-blue-200"
                placeholder="Enter your password"
                name="password"
                onChange={handleChange}
                value={formData.password}
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full px-4 py-2 text-lg font-semibold text-white bg-blue-500 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-200 transition duration-300"
              >
                Log in
              </button>
            </div>
            <div className="flex flex-col space-y-5">
              <span className="flex items-center justify-center space-x-2">
                <span className="h-px bg-gray-300 w-14"></span>
                <span className="font-normal text-gray-500">
                  or log in with
                </span>
                <span className="h-px bg-gray-300 w-14"></span>
              </span>
              <div className="flex flex-col space-y-4">
                <a
                  href="\#"
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition duration-300 border border-gray-700 rounded-md group hover:bg-gray-800 focus:outline-none"
                >
                  <svg
                    className="w-5 h-5 text-gray-800 group-hover:text-white"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                    ></path>
                  </svg>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-white">
                    Github
                  </span>
                </a>
                <a
                  href="/#"
                  className="flex items-center justify-center px-4 py-2 space-x-2 transition duration-300 border border-blue-500 rounded-md group hover:bg-blue-500 focus:outline-none"
                >
                  <svg
                    className="w-5 h-5 text-blue-500 group-hover:text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743A11.65 11.65 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="text-sm font-medium text-blue-500 group-hover:text-white">
                    Twitter
                  </span>
                </a>
              </div>
            </div>
          </form>
        </div>
        {/* Display Success Popup on successful signup */}
        {successMessage && (
          <SuccessPopup message={successMessage} onClose={handleClosePopup} />
        )}
      </div>
    </div>
  );
}

export default Login;
