'use client'
import React from "react";
import Image from "next/image";
import {getCookie, hasCookie} from "cookies-next";

export default function Navbar(): React.ReactNode {
  const [score, setScore] = React.useState(parseInt(localStorage.getItem('score') || "0"));

  window.addEventListener('scoreUpdate', () => {
    setScore(parseInt(getCookie('score')?.toString() as string))
  })

  return (
    <nav className={`bg-gray-800`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-min items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center gap-4">
              <Image
                src={'/images/greens.png'}
                alt={'CompSoc Greens Logo'}
                width={100}
                height={100}
              />
              <h1 className={"font-bold text-white"}>VERY SECURE WEBSITE</h1>
            </div>
          </div>
          <div>
            <span className="text-white font-bold text-lg">
              Score: {score}
            </span>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
             aria-current="page">Dashboard</a>
          <a href="#"
             className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="#"
             className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="#"
             className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        </div>
      </div>
    </nav>
  )
}