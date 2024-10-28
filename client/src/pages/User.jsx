import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { FcBusinesswoman, FcBusinessman } from "react-icons/fc";

export default function User() {
  const { id } = useParams();

  const [user, setUser] = useState({});

  useEffect(() => {
    axios(`http://localhost:3000/user/${id}`)
      .then((res) => setUser(res.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, [id]);

  return (
    <div className="bg-gray-800 p-8 rounded-2xl shadow-xl mx-auto w-11/12 md:w-1/2 mt-10 mb-10">
      <h1 className="text-4xl font-bold text-amber-400 text-center mb-6">
        User Profile
      </h1>
      <div className="bg-gray-900 rounded-xl p-6 shadow-lg flex flex-col justify-between h-full">
        <div className="flex items-center mb-6 justify-center">
          <div className="mr-4 w-1/2 flex justify-center">
            {user.gender === "Male" ? (
              <FcBusinessman className="w-48 h-48 " />
            ) : (
              <FcBusinesswoman className="w-48 h-48" />
            )}
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-semibold text-white">
              {user.first_name} {user.last_name}
            </h2>
            <p className="text-gray-400 mt-2 text-xl">{user.email}</p>
            <p className="text-gray-400 mt-2 text-xl">
              <span className="text-white font-bold">ID:</span> {user.id}
            </p>
            <p className="text-gray-400 mt-2 text-xl">
              <span className="text-white font-bold">Age:</span> {user.age}
            </p>
            <p className="text-gray-400 mt-2 text-xl mb-10">
              <span className="text-white font-bold">Gender:</span>{" "}
              {user.gender}
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Link
            to="/"
            className="mt-4 text-xl font-bold bg-amber-500 text-white py-2 px-4 rounded-lg hover:bg-amber-600 transition-colors duration-200"
          >
            Go Back Home
          </Link>
        </div>
      </div>
    </div>
  );
}
