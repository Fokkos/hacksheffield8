"use client"

import React, {useRef} from "react";
import Confetti from "react-dom-confetti";

export default function AdminDash(): React.ReactNode {

  function playSound() {
    var audio = new Audio("/tada.mp3");
    audio.play();
  }

  function handleButtonClick() {
    setIsExploding(!isExploding)
    playSound()
  }

  const [isExploding, setIsExploding] = React.useState(false);
  return (
    <main className={'w-full h-screen flex items-center justify-center'}>
      <button className="button m-auto" onClick={handleButtonClick}>
        <span>boom</span>
        <Confetti
          active={isExploding}
          config={{
            spread: 360,
            elementCount: 250
          }}
        />
      </button>
    </main>
  );
}