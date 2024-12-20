import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100 px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-red-500">404</h1>
        <p className="text-lg md:text-2xl mt-4 text-gray-700">
          Oops! Page Not Found
        </p>
        <Link 
          to='/'  
          className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
