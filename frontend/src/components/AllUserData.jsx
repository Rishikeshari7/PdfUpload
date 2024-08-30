import React, { useEffect, useState } from "react";
import { GetAllUser } from "../apis/apiConnector";
import { saveAs } from "file-saver";
import toast from "react-hot-toast";
const AllUserData = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await GetAllUser();
        setUsers(data);
      } catch (err) {
        console.log("Failed to fetch user data.");
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);
  //   const downloadFile = (url)=>{
  //     const fileName=url.split("/").pop;
  //     const aTag=document.createElement("a");
  //     aTag.href=url;
  //     aTag.setAttribute("download",fileName)
  //     document.body.appendChild(aTag);
  //     aTag.click();
  //     aTag.remove();
  //   }
  const downloadFile = (url) => {
    saveAs(url);
  };

  if (loading)
    return (
      <div className="text-center text-gray-700 dark:text-gray-300">
        Loading...
      </div>
    );
  if (!users)
    return (
      <div className="text-center text-xl font-bold mt-20 text-gray-700 dark:text-gray-300">
        No user data available.
      </div>
    );

  return (
    <div className="mx-auto px-8 py-12">
      <h2 className=" text-gray-800 dark:text-gray-100 text-4xl font-extrabold text-center mb-12 ">
        All Users
      </h2>
      <div className=" w-10/12 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-14">
        {users.map((user) => (
          <div
            key={user._id}
            className="flex flex-col items-center bg-white shadow-lg rounded-xl overflow-hidden p-6 dark:bg-gray-900 dark:text-gray-200 transition-transform duration-300 transform hover:scale-105"
          >
            <div className="flex flex-col items-center mb-6">
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-28 h-28 rounded-full border-4 border-gray-200 dark:border-gray-700 object-cover mb-4"
              />
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">{`${user.firstName} ${user.lastName}`}</h1>
              <p className="text-gray-600 dark:text-gray-400 mb-1">
                {user.email}
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                {user.contactNumber}
              </p>
            </div>
            <div className="flex justify-center mb-4">
              <img
                src={user.pdf.replace(/\.pdf(?!.*\.pdf)/, ".png")} //i do this because on upload pdf it acces in png mode only
                alt="Resume Preview"
                className="w-36 h-36 object-cover border-2 border-gray-200 dark:border-gray-700 rounded-md shadow-md"
              />
            </div>
            <div className="flex gap-4 mt-4">
              <a
                href={user.pdf.replace(/\.pdf(?!.*\.pdf)/, ".png")} //i do this because on upload pdf it acces in png mode only
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                View Resume
              </a>
              <button
                onClick={() =>
                  downloadFile(user.pdf.replace(/\.pdf(?!.*\.pdf)/, ".png"))
                } //i do this because on upload pdf it acces in png mode only
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors dark:bg-green-500 dark:hover:bg-green-600"
              >
                Download
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllUserData;
