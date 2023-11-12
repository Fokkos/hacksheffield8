"use client"

import React from "react";

export default function SearchBar(): React.ReactNode {

  function search(formData: FormData) {
    const query = formData.get("query");
    window.location.href = '/search?query=' + query;
  }

  return (
    <form action={search}>
      <label htmlFor="searchQuery" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="query"
          name="query"
          className="block w-full p-4 ps-10 text-sm border rounded-b-lg bg-gray-700 border-gray-600 placeholder-gray-400 text-white "
          placeholder="Search the VERY SECURE database"
          required
        />
        <button
          type="submit"
          className="text-white absolute end-2.5 bottom-2.5 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 border-none cursor-pointer"
        >
          Search
        </button>
      </div>
    </form>
  );
}
