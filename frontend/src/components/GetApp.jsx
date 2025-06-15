import { Link } from "react-router-dom";

const GetAppComingSoon = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">
          Our App Is Coming Soon
        </h1>

        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-6">
          <div className="text-center mb-8">
            <div className="text-6xl mb-6">🚀</div>
            <h2 className="text-2xl font-semibold mb-3">
              We are working on something amazing!
            </h2>
            <p className="text-gray-600">
              Our mobile and desktop applications are currently in development.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-lg mb-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              Platforms Coming Soon
            </h3>
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="p-4">
                <div className="text-4xl mb-2">📱</div>
                <p className="font-medium">iOS & Android</p>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-2">💻</div>
                <p className="font-medium">Windows & macOS</p>
              </div>
              <div className="p-4">
                <div className="text-4xl mb-2">🌐</div>
                <p className="font-medium">Web Version</p>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 text-center">
              Be the first to know
            </h3>
            <div className="max-w-md mx-auto">
              <p className="text-gray-600 mb-4 text-center">
                Subscribe to our newsletter and we will notify you when our app
                launches!
              </p>
              <form
                action="https://formspree.io/f/mldbgerv"
                method="POST"
                className="flex flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                  Notify Me
                </button>
              </form>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="text-xl font-bold mb-4 text-center">
              What to expect
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-xl">⭐</div>
                <div>
                  <h4 className="font-medium">Seamless Experience</h4>
                  <p className="text-gray-600 text-sm">
                    Sync across all your devices
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-xl">⭐</div>
                <div>
                  <h4 className="font-medium">Offline Mode</h4>
                  <p className="text-gray-600 text-sm">
                    Full functionality without internet
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-xl">⭐</div>
                <div>
                  <h4 className="font-medium">Enhanced Features</h4>
                  <p className="text-gray-600 text-sm">
                    Exclusive to app users
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="text-blue-500 text-xl">⭐</div>
                <div>
                  <h4 className="font-medium">Regular Updates</h4>
                  <p className="text-gray-600 text-sm">
                    New features and improvements
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Want more information?{" "}
            <Link to="/Contacts" className="text-blue-600 hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetAppComingSoon;
