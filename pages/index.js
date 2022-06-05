import React from "react";
import Sidebar from "../components/sideBar";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Sidebar />
      <div className="container text-center cursor-pointer">
        <Link href={"/userlist"}>
          <h1 className="text-3xl p-24 font-bold text-fuchsia-500"> Go to Users List</h1>
        </Link>
      </div>
    </>
  );
};

export default Home;
