import React, { useEffect, useState } from "react";
import axios from "axios";
import useRouter from "next/router";
import Link from "next/link";

const EditUser = () => {
  const [nama, setNama] = useState("");
  const [noWa, setNoWA] = useState("");
  const [kota, setKota] = useState("");
  const [kelurahan, setKel] = useState("");

  const [image, setImage] = useState("");

  useEffect(() => {
    const getUserById = async () => {
      // const router = useRouter
      // let { id } = router.query
      const url_id = window.location.pathname;
      try {
        const res = await axios.get(process.env.MONGO_URI + url_id);
        const response = res.data.data;
        setNama(response.nama);
        setNoWA(response.noWa);
        setKota(response.alamat.kota);
        setKel(response.alamat.kelurahan);
        setImage(process.env.MONGO_IMG + response.image);
      } catch (error) {
        console.log(error);
      }
    };
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    const url_id = window.location.pathname;

    try {
      let formData = new FormData();
      formData.append("nama", nama);
      formData.append("noWa", noWa);
      formData.append("alamat[kota]", kota);
      formData.append("alamat[kelurahan]", kelurahan);
      formData.append("image", image);

      await axios.put(process.env.MONGO_URI + url_id, formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      useRouter.push("/userlist");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mx-auto border-4 max-w-3xl p-4 m-14 rounded-lg">
      <div className="max-w-md px-8 py-4 mx-auto mb-5  bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <div className="flex justify-center -mt-16 md:justify-end">
          <img className="object-cover w-20 h-20 border-2 border-blue-500 rounded-full dark:border-blue-400" alt="Testimonial avatar" src={image} />
        </div>

        <h2 className="mt-2 text-2xl font-semibold text-gray-800 dark:text-white md:mt-0 md:text-3xl">{nama}</h2>

        <p className="mt-2 text-gray-600 dark:text-gray-200">Alamat </p>
        <p className="mt-2 text-gray-600 dark:text-gray-200">Kota : {kota}</p>
        <p className="mt-2 text-gray-600 dark:text-gray-200">Kelurahan : {kelurahan}</p>

        <div className="flex justify-end mt-4">
          <a href="#" className="text-xl font-medium text-blue-500 dark:text-blue-300">
            {noWa}
          </a>
        </div>
      </div>
      <form onSubmit={updateUser}>
        <div className="m-auto my-2 border-2 max-w-xl p-4 rounded-lg">
          <label>Nama :</label>
          <div className="border-2">
            <input type="text" placeholder="Nama Anda" className="w-full" defaultValue={nama} onChange={(e) => setNama(e.target.value)} />
          </div>
        </div>
        <div className="m-auto my-2 border-2 max-w-xl p-4 rounded-lg">
          <label>No WhatsAPP :</label>
          <div className="border-2">
            <input type="text" placeholder="Nomor WhatsApp Anda" className="w-full" defaultValue={noWa} onChange={(e) => setNoWA(e.target.value)} />
          </div>
        </div>
        <div className="m-auto my-2 border-2 max-w-xl p-4 rounded-lg">
          <label>Alamat :</label>
          <div className="border-2">
            <input type="text" placeholder="Kota Anda" className="w-full" defaultValue={kota} onChange={(e) => setKota(e.target.value)} />
            <input type="text" placeholder="Kelurahan Anda" className="w-full" defaultValue={kelurahan} onChange={(e) => setKel(e.target.value)} />
          </div>
        </div>
        <button
          className="px-4 py-1 mt-3 mx-4 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-green-600 rounded-md hover:bg-green-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
          type="submit"
        >
          Update
        </button>
      </form>
      <div className="container m-4">
        <Link href={"/userlist"}>
          <a className="px-7 py-1 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            Exit
          </a>
        </Link>
      </div>
    </div>
  );
};

export default EditUser;
