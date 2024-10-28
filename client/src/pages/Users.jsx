import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [ageFilter, setAgeFilter] = useState("");

  const fetchUsers = (search, age) => {
    const params = {};
    if (search) {
      params.search = search;
    }
    if (age) {
      params.age = age;
    }

    axios
      .get(`http://localhost:3000/`, { params })
      .then((res) => setUsers(res.data))
      .catch(() => console.log("Error fetching users:"));
  };

  const handleSearch = () => {
    fetchUsers(searchValue, ageFilter);
  };

  const handleAgeFilter = (age) => {
    if (age === "reset") {
      setAgeFilter("");
      fetchUsers(searchValue, "");
    } else {
      setAgeFilter(age);
      fetchUsers(searchValue, age);
    }
  };

  return (
    <>
      <div className="container flex justify-between bg-gray-800 p-8 rounded-2xl shadow-xl mx-auto w-max mt-10 mb-10">
        <div className="w-5/6 p-4">
          <h1 className="text-4xl font-bold text-amber-400 text-center mb-10">
            Users List
          </h1>

          {/* Search Bar */}
          <div className="mb-6 flex gap-2">
            <input
              type="text"
              placeholder="Search by name..."
              className="w-full p-3 rounded-lg text-2xl bg-gray-900 text-white border-2 border-gray-600 focus:outline-none focus:border-2 focus:border-amber-500 focus:ring-0"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
            <button
              className="border-0 bg-amber-500 px-10 rounded-lg text-xl text-slate-100 font-bold hover:bg-amber-600 transition-colors duration-200"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>

          {/* User List */}
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {users.length > 0 ? (
              users.map((user) => (
                <div
                  key={user._id}
                  className="user-card bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-200"
                >
                  <h2 className="text-2xl font-semibold text-white">
                    {user.first_name} {user.last_name}
                  </h2>
                  <p className="text-gray-400 mt-1 text-xl">{user.email}</p>
                  <p className="text-gray-400 mt-1 text-xl">
                    <span className="text-white font-bold">ID :</span> {user.id}
                  </p>
                  <p className="text-gray-400 mt-1 text-xl mb-10">
                    <span className="text-white font-bold">Age :</span>{" "}
                    {user.age}
                  </p>
                  <Link
                    to={`/user/${user._id}`}
                    className="mt-4 bg-amber-500 text-white py-2 px-4 rounded-lg w-10/12 text-xl hover:bg-amber-600 transition-colors duration-200"
                  >
                    View Profile
                  </Link>
                </div>
              ))
            ) : (
              <p className="text-2xl font-bold text-white text-center col-span-3">
                No users found.
              </p>
            )}
          </div>
        </div>

        {/* Filter */}
        <div className="w-1/6 p-5 mt-20">
          <h2 className="text-xl font-bold mb-8 text-white text-center">
            Filter Users by Age
          </h2>
          <div className="flex flex-col gap-4">
            {["0-20", "21-40", "41-60", "61-80", "80+", "reset"].map(
              (range) => (
                <div key={range} className="w-full">
                  <button
                    onClick={() => handleAgeFilter(range)}
                    className="bg-gray-700 text-white w-full p-2 rounded-lg hover:bg-amber-500 transition-colors duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
                  >
                    <span className="font-semibold">{range}</span>
                  </button>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
