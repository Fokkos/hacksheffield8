'use client'
import React, {useEffect} from "react";
import Image from "next/image";
import {getCookie, hasCookie} from "cookies-next";
import {resetScore} from "@/helpers/score";

export default function Navbar(): React.ReactNode {
  const [score, setScore] = React.useState(0);

  useEffect(() => {
    setScore(parseInt(getCookie('score')?.toString() || "0"))
    window.addEventListener('scoreUpdate', () => {
      setScore(parseInt(getCookie('score')?.toString() as string))
    })
  })

  return (
    <nav className={`bg-gray-800`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex flex-col md:flex-row h-min items-start md:items-center justify-between gap-6 lg:gap-24">
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-4">
              <a href={'/'}>
                <Image
                  src={'/images/greens.png'}
                  alt={'CompSoc Greens Logo'}
                  width={100}
                  height={100}
                />
              </a>
              <h1 className={"font-bold text-white"}>VERY SECURE WEBSITE</h1>
            </div>
          </div>
          <div className={'flex flex-row gap-8 self-stretch py-5 mb-6 md:m-0 items-center justify-between'}>
            <div className={'flex gap-4'}>
              <a href={'/feedback-form'} className={'text-white text-xl underline cursor-pointer hover:text-gray-300'}>POSTing Forms</a>
              <a href={'/cryptography'} className={'text-white text-xl underline cursor-pointer hover:text-gray-300'}>Cryptography</a>
              <a href={'/admin'} className={'text-white text-xl underline cursor-pointer hover:text-gray-300'}>Not the Admin Dashboard</a>
            </div>
            <div className={'w-[2px] bg-white self-stretch border-y-[16px] border-y-gray-800'} />
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