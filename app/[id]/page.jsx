"use client"

import axios from "axios";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default async function AlbumDetails({ params }) {
  const fetchProduct=async()=> {
    const response = await axios.get(`https://fakestoreapi.com/products/${params.id}`);
      const data = await response.data;
      return data;
  }

  let data=await fetchProduct();

  return (
    <>
      <Navbar />
      <div className="bg-black text-gray-300 min-h-screen p-10">
        <div className="flex">
          <Image
            className="mr-6"
            src={data.image}
            width={200}
            height={200}
            alt="img"
          />
          <div className="flex flex-col justify-center">
            <h1 className="mt-0 mb-2 text-white text-4xl">
              {data.title}
            </h1>
            <h4 className="mt-0 mb-2 uppercase text-gray-300 tracking-widest text-xs">
              Category: {data.category}
            </h4>
            <h4 className="mt-0 mb-2 uppercase text-gray-300 tracking-widest text-xs">
              ID: {data.id}
            </h4>
            <h4 className="mt-0 mb-2 uppercase text-gray-300 tracking-widest text-xs">
              Rating: {data.rating?data.rating.rate:''}
            </h4>
            <h4 className="mt-0 mb-2 uppercase text-gray-300 tracking-widest text-xs">
              Price: ${data.price}
            </h4>
          </div>
        </div>
        <p className="text-gray-400 text-sm pt-10 ">
          <b className="text-gray-300 text-sm pt-10">Description:</b> {data.description}
        </p>
      </div>
    </>
  );
}
