"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FaSearchengin } from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";

export default function Navbar() {
  let [searchedText, setSearchedText] = useState("");
  const router = useRouter();
  function handleSearch(event) {
    router.push("/search?" + searchedText);
  }

  return (
    <div>
      <nav className="sticky top-0 flex h-14 items-center justify-between bg-sky-600 px-5">
        <ul className="flex   text-white ">
          <Link href={"/"}>
            <h1 className="py-1 px-2" style={{ display: "flex" }}>
              <MdLocalGroceryStore size={23}/>  Online Store
            </h1>
          </Link>
        </ul>

        <div className="ml-5 flex w-[30%] items-center justify-between">
          <input
            type="search"
            className="relative m-0 block w-[1px] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-neutral-300 outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-300 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none motion-reduce:transition-none dark:border-neutral-300 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
            value={searchedText}
            onChange={(e) => {
              setSearchedText(e.target.value);
            } 
            }
            onKeyDown={(e)=>{
              if (e.keyCode=== 13){
                handleSearch();
              }
              
            }}
          />

          <span
            className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-300 dark:text-neutral-200"
            id="basic-addon2"
          >
            <button onClick={handleSearch}>
              <FaSearchengin size={30} />
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
}
