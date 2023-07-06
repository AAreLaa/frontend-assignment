"use client";

import axios from "axios";
import Image from "next/image";
import wait from "../images/wait.gif";
import { useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import NotFound from "../components/NotFound";

export default function Search() {
  const searchParams = useSearchParams();
  let search = searchParams.toString();
  search= search.slice(0,search.length-1)

  const fetchProduct = async () => {
    const response = await axios.get("https://fakestoreapi.com/products/");
    const data = await response.data;
    return data;
  };

  const { isLoading, isError, error, data } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProduct,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Wait for a moment
        <Image src={wait} width={200} height={200} alt="loading" />
      </div>
    );
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }


  return (
    <div className="container">
      <Navbar />
      {!isLoading && (
        <div className="container my-3 px-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-8">
          {data
            .filter(product => product.title.toLowerCase().includes(search.toLowerCase()))
            .map((product) => {
              console.log(product)
              return <Card product={product} key={product.id} />;
            })}
        </div>
      )}
      {
        data
        .filter(product => product.title.toLowerCase().includes(search.toLowerCase())).length===0?<NotFound/>:''
      }
    </div>
  );
}
