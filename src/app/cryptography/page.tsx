"use client";

import React from 'react';
import {Card, CardContent} from "@mui/material";
import {fontMono} from "@/app/fonts";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import {findHack} from "@/helpers/score";
import HackFoundModal from "@/components/HackFoundModal";

export default function Cryptography(): React.ReactNode {
  const textRef: React.MutableRefObject<HTMLInputElement | null> = React.useRef<HTMLInputElement>(null)
  const [cracked, setCracked] = React.useState(false);
  
  const checkPassword = () => {
    if ((textRef.current!.lastElementChild!.firstElementChild! as HTMLInputElement).value === 'thisismyverylongpassword-ihopenobodyguessesit') {
      setCracked(true)
      findHack('cryptography');
    }
  }
  
  return (
    <>
      <Card variant={'outlined'} className={'max-w-xl mx-auto mt-16 flex flex-col items-center'}>
        <CardContent className={'flex flex-col items-center gap-6'}>
          <h1>Hello!</h1>
          <p className={'text-center'}>We made a password hashing algorithm, and we&apos;re quite proud of it. Look, below is a hashed version of my password - I bet you can&apos;t crack it!</p>
          <Card variant={'outlined'} className={'max-w-full text-center'}>
            <p className={`${fontMono.className} px-4`}>uijtjtnzwfszmpohqbttxpse-jipqfopcpezhvfttftju</p>
          </Card>
          <TextField label={"Your Guess"} className={'w-3/4'} ref={textRef}/>
          <Button variant={'contained'} size={'large'} type={"button"} onClick={checkPassword}>
            Make Your Guess!
          </Button>
        </CardContent>
      </Card>

      {cracked && (
        <HackFoundModal title={"Cryptographic Failure Found!"} changeState={setCracked}>
          <p>
            Looks like we&apos;ll have to work on that hash function!<br className={'mb-2'} />
            That was an example of a <strong>cryptographic failure</strong>. When it comes to hashing passwords, the last thing you should do is attempt to implement your own hashing function - unless you&apos;re an expert cryptographer, no custom-made hash function will be more effective than industry-standard ones, such as PBKDF2-HMAC-SHA512. This <a href={"https://crackstation.net/hashing-security.htm"} className={'underline cursor-pointer text-gray-800 hover:text-gray-500'}>guide to password hashing by crackstation</a> gives a good overview of how passwords <strong>should</strong> be stored.
          </p>
        </HackFoundModal>
      )}
    </>
  )
}