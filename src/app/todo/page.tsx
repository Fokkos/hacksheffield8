"use client"

import React from "react";
import HackFoundModal from "@/components/HackFoundModal";

export default function TodoList(): React.ReactNode {
  return (
    <main className={`w-full h-full pb-8 px-24`}>
      <h1 className={'text-6xl'}>Developer To-Do List</h1>
      <ul>
        <li>Make site prettier</li>
        <li>Add more fun pages</li>
        <li>Change admin password, and remove account deletion buttons from /admin</li>
        <li>Adjust search to use prepared statements to fix SQL injections</li>
        <li>Fix POST request authorisation</li>
      </ul>
      <HackFoundModal title={"Bonus vulnerability found!"}>
        <p className="text-gray-800">
          This doesn&apos;t count towards your score - but it might help you find any missing vulnerabilities!<br className={'mb-2'} />
          Looks like this developer knew all about the vulnerabilities within their website, but had other priorities when they were working on the site. Don&apos;t do this - if you find a security vulnerability in any program that you are creating, fixing that should be your top priority.<br className={'mb-2'} /><br className={'mb-2'} />
          Also... Writing your to-do list as a page on a live website? Really?
        </p>
      </HackFoundModal>
    </main>
  );
}