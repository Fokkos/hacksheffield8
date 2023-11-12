"use client"

import React from "react";
import Confetti from "react-dom-confetti";
import useMousePosition from "@/helpers/mouseposition";
import SignIn from "@/components/SignIn";
import AdminHackFoundModal from "@/components/AdminHackFoundModal";
import {playSound, randomYay, vineBoom} from "@/helpers/sound";
import {findHack} from "@/helpers/score";

export default function AdminDash(): React.ReactNode {

  const [isExploding, setIsExploding] = React.useState(false);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const tableRef: React.MutableRefObject<HTMLTableElement | null> = React.useRef<HTMLTableElement>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    if (data.get('username')?.toString().toLowerCase() === 'admin' && data.get('password')?.toString().toLowerCase() === 'admin') {
      setIsAdmin(true);

      findHack('adminlogin')

      setTimeout(() => {
        setIsExploding(true);
        playSound(randomYay());
      }, 500)
    }
  };

  const deleteUser = (user_id: number) => {
    if (tableRef.current === null) {
      return
    }
    for (let i = 0; i < tableRef.current.lastElementChild!.childNodes.length; i++) {
      if (tableRef.current.lastElementChild!.children[i].firstElementChild!.innerHTML === user_id.toString()) {
        tableRef.current.deleteRow(i + 1);
        playSound(vineBoom());
        break;
      }
    }
  }

  return (
    <main className={`w-full h-full pb-8 px-24`}>
      <h1 className={'text-6xl'}>Developer Notes</h1>
      <ul>
        <li>Remove account deletion button from /admin</li>
        <li>Adjust search to use prepared statements</li>
        <li></li>
      </ul>
    </main>
  );
}