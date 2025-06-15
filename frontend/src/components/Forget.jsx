import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // We will use useNavigate to handle redirection
import axios from "axios"; // Make sure axios is installed

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false); // For loading state
  const [error, setError] = useState(""); // For error handling
  const [success, setSuccess] = useState(""); // For success message

  const navigate = useNavigate(); // For navigating after successful reset

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email.");
      return;
    }

    setLoading(true);
    setError(""); // Reset any previous error

    try {
      const response = await axios.post("http://localhost:8080/auth/forgot-password", {
        email,
      });
      console.log(response.data);
      
      // Set success message if API responds successfully
      setSuccess("Password reset link sent! Please check your email.");
      
      // Redirect to a different page after successful reset
      setTimeout(() => {
        navigate("/signin"); // After a few seconds, navigate to sign-in page
      }, 2000);
    } catch (error) {
      setError("Something went wrong! Please try again.");
      console.error(error);
    } finally {
      setLoading(false); // Stop loading spinner after the API call
    }
  };

  return (
    <div className="flex items-center justify-center w-full h-screen border-none bg-black">
      <div className="h-auto p-5 bg-white border border-gray-200 shadow-lg w-80 rounded-xl">
        <h2 className="text-2xl font-bold text-black ">Password Reset</h2>
        <div className="flex flex-col items-center m-2 mt-2 border border-yellow-300 rounded-md bg-yellow-50">
          <p className="m-4">
            Forgotten your password? Enter your e-mail address below, and we will send you an e-mail allowing you to reset it.
          </p>
        </div>

        {/* Error Message */}
        {error && <p className="text-red-600 mt-2">{error}</p>}
        
        {/* Success Message */}
        {success && <p className="text-green-600 mt-2">{success}</p>}

        <div className="mt-6">
          <label className="text-lg font-medium text-gray-600">Email</label>
          <input
            className="w-full p-3 mt-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-500"
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>

        <button
          className="w-[60%] py-2 mt-8 text-lg text-white transition-transform transform rounded-lg bg-green-500 hover:scale-105 active:scale-95 focus:ring-2 focus:ring-offset-2 focus:ring-violet-500"
          onClick={handleSubmit}
          disabled={loading} // Disable button when loading
        >
          {loading ? "Sending..." : "Reset My Password"}
        </button>

        {/* Link to Sign In */}
        <div className="mt-4 text-center">
          <Link to="/signin" className="text-sm text-blue-500">
            Back to Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
