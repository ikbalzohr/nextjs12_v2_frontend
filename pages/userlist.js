import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Sidebar from "../components/sideBar";

const UserList = () => {
  const [users, setUser] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await axios.get(process.env.MONGO_URI);
      setUser(response.data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteUser = async (id) => {
    try {
      await axios.delete(process.env.MONGO_URI + "/" + id);
      getUser();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section>
      <Sidebar />
      {isLoading ? (
        <div className="flex justify-center">
          <p className="text-4xl mt-20 font-bold text-cyan-600 italic ">Loading..</p>
        </div>
      ) : (
        <div className="pt-20">
          <div className="container sm mx-auto border-4 max-w-5xl p-4 rounded-lg">
            <div className="w-24 px-4 py-1 mb-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
              <Link href={"/addUsers"}>Add Data</Link>
            </div>
            <table className="min-w-full text-center">
              <thead className="border-2 bg-gray-800 boder-gray-900-b">
                <tr>
                  <th rowSpan={2} scope="col" className="font-medium text-lg text-white px-3 py-2">
                    No.
                  </th>
                  <th rowSpan={2} scope="col" className="font-medium text-lg text-white px-3 py-2">
                    Nama
                  </th>
                  <th rowSpan={2} scope="col" className="font-medium text-lg text-white px-3 py-2">
                    No WhatsApp
                  </th>
                  <th colSpan={2} scope="col" className="text-sm text-center font-medium text-white px-3 py-2">
                    Alamat
                  </th>
                  <th rowSpan={2} scope="col" className="font-medium text-lg text-white px-3 py-2">
                    Photo
                  </th>
                  <th rowSpan={2} scope="col" className="font-medium text-lg text-white px-3 py-2">
                    Actions
                  </th>
                </tr>
                <tr>
                  <th scope="col" className="text-sm text-center font-medium text-white px-3 py-2">
                    Kota
                  </th>
                  <th scope="col" className="text-sm text-center font-medium text-white px-3 py-2">
                    Kelurahan
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, index) => (
                  <tr key={user._id} className="border-2">
                    <td className="text-sm text-gray-900 font-medium px-3 py-4 whitespace-nowrap">{index + 1}</td>
                    <td className="text-sm text-gray-900 font-medium px-3 py-4 whitespace-nowrap">{user.nama}</td>
                    <td className="text-sm text-gray-900 font-medium px-3 py-4 whitespace-nowrap">0{user.noWa}</td>
                    <td className="text-sm text-gray-900 font-medium px-3 py-4 whitespace-nowrap">{user.alamat.kota}</td>
                    <td className="text-sm text-gray-900 font-medium px-3 py-4 whitespace-nowrap">{user.alamat.kelurahan}</td>
                    <td className="text-sm text-gray-900 font-medium px-3 py-4 whitespace-nowrap">
                      <a href={process.env.MONGO_IMG + user.image} target="_blank">
                        <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={process.env.MONGO_IMG + user.image} />
                      </a>
                    </td>
                    <td>
                      <Link href={`/${user._id}`}>
                        <a className="px-4 py-1 mx-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                          Edit
                        </a>
                      </Link>
                      <span className="mr-2"></span>
                      <button
                        onClick={() => deleteUser(user._id)}
                        className="px-4 py-1 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </section>
  );
};

export default UserList;
