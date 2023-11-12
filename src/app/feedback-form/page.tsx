'use client'
import React from 'react';
import {playSound, randomYay} from "@/helpers/sound";
import {findHack} from "@/helpers/score";
import PostReqFoundModal from "@/components/PostReqFoundModal";
import Confetti from "react-dom-confetti";

export default function FeedbackForm(): React.ReactNode {
  const formRef: React.MutableRefObject<HTMLFormElement | null> = React.useRef<HTMLFormElement>(null)
  const [isExploding, setIsExploding] = React.useState(false);
  const [modalShown, setModalShown] = React.useState(false);

  const submitForm = () => {
    if (formRef.current == null) {
      return;
    }

    fetch(formRef.current?.action, {
      method: formRef.current?.method
    }).then(r => r.json())
      .then(data => {
        if (!data['very'].startsWith('nice')) {
          setModalShown(true);
          setTimeout(() => {
            setIsExploding(true);
            playSound(randomYay());
          }, 500)
          findHack('postrequest')
        }
      })
  }
  return (
    <>
      <form action={'/submit-feedback'} method={'POST'} ref={formRef}>
        <button type={"button"} onClick={submitForm}>Submit</button>
      </form>
      {modalShown && (
        <PostReqFoundModal>
          <Confetti
            active={isExploding}
            config={{
              spread: 360,
              elementCount: 300,
              startVelocity: 30
            }}
          />
        </PostReqFoundModal>
      )}
    </>
  )
}