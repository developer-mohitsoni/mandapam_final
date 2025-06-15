import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./styles.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:8080/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      navigate("/marriage-gardens", { replace: true });
    } catch (error) {
      console.error("Login failed:", error);
      alert(
        error.response?.data?.message ||
          "Something went wrong. Please try again."
      );
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/marriage-gardens", { replace: true });
    }
  }, [navigate]);

  return (
    <div className="flex justify-center items-center w-full h-screen bg-black">
      <div className="w-full max-w-lg px-10 py-12 rounded-3xl bg-white shadow-2xl floating-form">
        <h1 className="text-3xl font-semibold text-center text-gray-800 md:text-5xl">
          Welcome Back!
        </h1>
        <p className="mt-4 text-sm font-medium text-center text-gray-500 md:text-lg">
          Please enter your details.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 md:text-lg">
              Email
            </label>
            <input
              className="w-full p-4 mt-2 bg-transparent border-2 border-gray-200 rounded-xl md:p-4"
              placeholder="Enter your email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 md:text-lg">
              Password
            </label>
            <input
              className="w-full p-4 mt-2 bg-transparent border-2 border-gray-200 rounded-xl md:p-4"
              placeholder="Enter your password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="flex justify-between">
            <div className="mt-6">
              <Link
                to="/Forget"
                className="text-sm font-medium text-gray-400 md:text-base"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="mt-8">
              <p className="text-sm font-medium text-gray-400 md:text-base">
                New here?{" "}
                <Link
                  to="/signup"
                  className="text-sm font-medium text-rose-500 md:text-base"
                >
                  Register Here!
                </Link>
              </p>
            </div>
          </div>

          <div className="flex flex-col mt-8 gap-y-4">
            <button
              type="submit"
              className="active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 bg-green-500 text-white text-sm md:text-lg font-bold rounded-xl"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
