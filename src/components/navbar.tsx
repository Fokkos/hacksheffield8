'use client'
import React, {useEffect} from "react";
import Image from "next/image";
import {getCookie, hasCookie} from "cookies-next";
import {resetScore} from "@/helpers/score";
import dynamic from "next/dynamic";
import MenuButton from "@/components/MenuButton";
import { motion } from "framer-motion";
const MediaQuery = dynamic(() => import("react-responsive"), {
  ssr: false,
});


export default function Navbar(): React.ReactNode {
  const [score, setScore] = React.useState(0);
  const [menuExpanded, setMenuExpanded] = React.useState<boolean>(false);

  const menuVariants = {
    visible: {
      opacity: 1,
      translateY: '0',
    },

    hidden: (i: number) => ({
      opacity: 0,
      translateY: `-100%`,
    }),
  };

  useEffect(() => {
    setScore(parseInt(getCookie('score')?.toString() || "0"))
    window.addEventListener('scoreUpdate', () => {
      setScore(parseInt(getCookie('score')?.toString() as string))
    })
  }, [])

  const handleClick: React.MouseEventHandler<SVGElement> = () => {
    setMenuExpanded(!menuExpanded);
  };

  return (
    <nav className={`bg-gray-800`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-min items-center justify-between gap-6 lg:gap-24">
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
          <MediaQuery maxWidth={767}>
            <span className="text-white text-xl">
              Score: {score}/5
            </span>
            <MenuButton
              clickAction={handleClick}
              menuOpenState={menuExpanded}
              className={`stroke-white cursor-pointer hover:text-gray-300 w-7 h-6 me-8`}
            />
            <motion.div
              className={`absolute w-full h-[150%] flex flex-col left-0 top-[100%] items-center pointer-events-none`}
              initial={"hidden"}
              animate={menuExpanded ? "visible" : "hidden"}
              transition={{staggerChildren: 0.15}}
            >
              <motion.div
                className={`flex w-screen justify-around flex-1 items-center z-50
                        bg-gray-800 menu-borders pointer-events-auto`}
                custom={0}
                variants={menuVariants}
              >
                <a href={'/feedback-form'} className={'text-white text-xl underline cursor-pointer hover:text-gray-300'}>POSTing Forms</a>
              </motion.div>
              <motion.div
                className={`flex w-screen justify-around flex-1 items-center z-50
                        bg-gray-800 menu-borders pointer-events-auto`}
                custom={1}
                variants={menuVariants}
              >
                <a href={'/cryptography'} className={'text-white text-xl underline cursor-pointer hover:text-gray-300'}>Cryptography</a>
              </motion.div>
              <motion.div
                className={`flex w-screen justify-around flex-1 items-center z-50
                        bg-gray-800 menu-borders pointer-events-auto`}
                custom={2}
                variants={menuVariants}
              >
                <a href={'/admin'} className={'text-white text-xl underline cursor-pointer hover:text-gray-300'}>Not the Admin Dashboard</a>
              </motion.div>
              <motion.div
                className={`flex w-screen justify-around flex-1 items-center z-50
                        bg-gray-800 menu-borders pointer-events-auto`}
                custom={3}
                variants={menuVariants}
              >
                <a className={'text-xl underline cursor-pointer text-white hover:text-gray-300'} onClick={resetScore}>
                  Reset Score
                </a>
              </motion.div>
            </motion.div>
          </MediaQuery>
          <MediaQuery minWidth={768}>
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
          </MediaQuery>
        </div>
      </div>
    </nav>
  )
}