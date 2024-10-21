import { Link, useNavigate } from "react-router-dom";
import { register } from "../../Services/authService";
import { useEffect, useState } from "react";
import SuccessPopup from "../Common/SuccessPopup";

function Signup() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear the error for the current field
    setErrors({ ...errors, [name]: "" });
  };

  const handleClosePopup = () => {
    setSuccessMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({}); // Reset errors before submitting
    setSuccessMessage("");

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setErrors({ ...errors, confirmPassword: "Passwords do not match." });
      return;
    }

    try {
      const response = await register({
        firstname: formData.firstname,
        lastname: formData.lastname,
        email: formData.email,
        password: formData.password,
        password_confirmation: formData.confirmPassword,
      });
      console.log("response", response);
      localStorage.setItem("token", response.access_token);

      // Redirect to the dashboard
      navigate("/dashboard");
      setSuccessMessage("Account created successfully!");
    } catch (err) {
      if (err?.error) {
        const apiErrors = err?.error;

        setErrors({
          firstname: apiErrors.firstname ? apiErrors.firstname[0] : "",
          lastname: apiErrors.lastname ? apiErrors.lastname[0] : "",
          email: apiErrors.email ? apiErrors.email[0] : "",
          password: apiErrors.password ? apiErrors.password[0] : "",
          confirmPassword: apiErrors.password ? apiErrors.password[0] : "", // Same as password
        });
      } else {
        setErrors({
          general: "An unexpected error occurred. Please try again later.",
        });
      }
    }
  };

  return (
    <div className="font-mono min-h-screen bg-gradient-to-r from-gray-800 to-gray-900 flex justify-center items-center">
      <div className="container mx-auto">
        <div className="flex justify-center items-center h-screen px-6">
          <div className="w-full xl:w-3/4 lg:w-11/12 flex shadow-lg">
            <div
              className="hidden lg:block lg:w-5/12 rounded-l-lg bg-cover"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80')`,
              }}
            ></div>

            <div className="w-full lg:w-7/12 bg-white p-8 lg:rounded-r-lg rounded-lg">
              <h3 className="text-3xl font-bold text-center text-gray-800 mb-6">
                Create an Account!
              </h3>

              <form
                className="bg-white rounded px-8 pt-6 pb-8 mb-4"
                onSubmit={handleSubmit}
              >
                {/* Form fields */}
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="firstname"
                    >
                      First Name
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                        errors.firstname ? "border-red-500" : "border-gray-200"
                      } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                      id="firstname"
                      type="text"
                      placeholder="First Name"
                      name="firstname"
                      onChange={handleChange}
                      value={formData.firstname}
                    />
                    {errors.firstname && (
                      <p className="text-red-500 text-xs italic">
                        {errors.firstname}
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="lastname"
                    >
                      Last Name
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                        errors.lastname ? "border-red-500" : "border-gray-200"
                      } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                      id="lastname"
                      name="lastname"
                      type="text"
                      placeholder="Last Name"
                      onChange={handleChange}
                      value={formData.lastname}
                    />
                    {errors.lastname && (
                      <p className="text-red-500 text-xs italic">
                        {errors.lastname}
                      </p>
                    )}
                  </div>
                </div>

                <div className="mb-4">
                  <label
                    className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={handleChange}
                    value={formData.email}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email}
                    </p>
                  )}
                </div>

                {/* Password and Confirm Password fields */}
                <div className="flex flex-wrap -mx-3 mb-4">
                  <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="password"
                    >
                      Password
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                        errors.password ? "border-red-500" : "border-gray-200"
                      } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                      id="password"
                      name="password"
                      type="password"
                      placeholder="******************"
                      onChange={handleChange}
                      value={formData.password}
                    />
                    {errors.password && (
                      <p className="text-red-500 text-xs italic">
                        {errors.password}
                      </p>
                    )}
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="confirmPassword"
                    >
                      Confirm Password
                    </label>
                    <input
                      className={`appearance-none block w-full bg-gray-200 text-gray-700 border ${
                        errors.confirmPassword
                          ? "border-red-500"
                          : "border-gray-200"
                      } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-purple-500`}
                      id="confirmPassword"
                      name="confirmPassword"
                      type="password"
                      placeholder="******************"
                      onChange={handleChange}
                      value={formData.confirmPassword}
                    />
                    {errors.confirmPassword && (
                      <p className="text-red-500 text-xs italic">
                        {errors.confirmPassword}
                      </p>
                    )}
                  </div>
                </div>

                <div className="text-center mb-4">
                  <button
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                  >
                    Signup
                  </button>
                </div>

                <hr className="border-t mt-4 mb-4" />

                <div className="text-center">
                  <Link
                    className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                    to="/login"
                  >
                    Already have an account? Login
                  </Link>
                </div>
              </form>

              {/* Display Success Popup on successful signup */}
              {successMessage && (
                <SuccessPopup
                  message={successMessage}
                  onClose={handleClosePopup}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
