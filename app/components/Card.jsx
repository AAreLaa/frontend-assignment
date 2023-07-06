import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Card({ product }) {
  return (
    <div className="container">
      <Link href={"/" + product.id}>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <Image
            src={product.image}
            alt="cover_thumbnail"
            width="10"
            height="10"
            sizes="100vw"
            className="rounded-t-lg relative w-full h-60 my-2"
          />
          <div className="p-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {`${product.title}`.slice(0, 30)}
              {`${product.title}`.length > 30 ? "..." : ""}
            </h5>
          </div>
        </div>
        </Link>
      <p className="mb-3 mt-3 font-normal text-gray-700 dark:text-gray-400">
        {`Price: $${product.price}`}
      </p>
      <Link
        href={"/" + product.id}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        View Details
        <svg
          aria-hidden="true"
          className="w-4 h-4 ml-2 -mr-1"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          ></path>
        </svg>
      </Link>
    </div>
  );
}
