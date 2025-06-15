import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";

const Header = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/SignIn");
    }, 1200);
  };

  return (
    <header className="fixed z-30 flex items-center justify-around w-full h-20 bg-black bg-opacity-50 shadow-md">
      <div className="w-auto">
        <h1 className="text-3xl font-bold text-red-500 underline">Mandapam</h1>
      </div>

      <div className="flex gap-4">
        {/* Show Login button only when not on /marriage-gardens */}
        {location.pathname !== "/marriage-gardens" && (
          <button
            onClick={handleLoginClick}
            className="flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-blue-700 rounded-3xl"
            type="button"
            disabled={loading}
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
            ) : (
              "Login Now"
            )}
          </button>
        )}

      </div>
    </header>
  );
};

export default Header;
