import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-bounce">404</h1>
        <h2 className="text-3xl font-semibold mb-2">Oops! Page Not Found</h2>
        <p className="mb-6 text-gray-400">
          The page you are looking for does not exist.
        </p>

        <Link
          to="/"
          className="bg-amber-500 text-white py-2 px-6 rounded-lg hover:bg-amber-600 transition-colors duration-200 transform hover:scale-105"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
}
