'use client'
import React, {useEffect} from "react";
import Image from "next/image";
import {getCookie, hasCookie} from "cookies-next";
import {resetScore} from "@/helpers/score";

export default function Navbar(): React.ReactNode {
  const [score, setScore] = React.useState(parseInt(getCookie('score')?.toString() || "0"));

  useEffect(() => {
    window.addEventListener('scoreUpdate', () => {
      setScore(parseInt(getCookie('score')?.toString() as string))
    })
  })

  return (
    <nav className={`bg-gray-800`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row h-min items-start md:items-center justify-between gap-6 md:gap-16 lg:gap-24">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <Image
                src={'/images/greens.png'}
                alt={'CompSoc Greens Logo'}
                width={100}
                height={100}
              />
              <h1 className={"font-bold text-white"}>VERY SECURE WEBSITE</h1>
            </div>
          </div>
          <div className={'flex flex-row flex-grow self-stretch mb-6 md:m-0 items-center justify-between'}>
            <div>
              <a href={'/feedback-form'} className={'text-white text-xl underline cursor-pointer hover:text-gray-300'}>Survey Form</a>
            </div>
            <div className={'flex flex-col text-white font-bold'}>
              <span className="text-lg">
                Score: {score}/5
              </span>
              <a className={'underline cursor-pointer hover:text-gray-300'} onClick={resetScore}>
                Reset Score
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}