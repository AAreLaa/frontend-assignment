"use client"

import Card from "./components/Card";
import Navbar from "./components/Navbar";
import axios from "axios";
import { useQuery } from '@tanstack/react-query';
import wait from "./images/wait.gif";
import Image from "next/image";

export default function Home() {

  const fetchProduct=async()=> {
    const response = await axios.get('https://fakestoreapi.com/products/');
      const data = await response.data;
      return data;
  }
  
  const { isLoading, isError, error, data } = useQuery({
    queryKey: ['products'],
    queryFn: fetchProduct,
  })

  if (isLoading) {
    return <div className="flex justify-center items-center h-screen">
          Wait for a moment
          <Image src={wait} width={200} height={200} alt="loading" />
        </div>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }
  console.log((data))

  return (
    <div>
      <Navbar />
      <div className="container my-3 px-10">
        <div className="py-8">
          <h2 className="font-semibold text-lg">Special Offers</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
            {data.map((product) => {
              return <Card product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
