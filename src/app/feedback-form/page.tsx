'use client'
import React from 'react';
import {playSound, randomYay} from "@/helpers/sound";
import {findHack} from "@/helpers/score";
import PostReqFoundModal from "@/components/PostReqFoundModal";
import Confetti from "react-dom-confetti";
import TextField from "@mui/material/TextField";
import {Card, CardActions, CardContent} from "@mui/material";
import Button from "@mui/material/Button";

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
      <Card variant={'outlined'} className={'max-w-xl mx-auto mt-16 flex flex-col items-center'}>
        <CardContent>
          <div className={'mb-8'}>
            <h1 className={'text-6xl mb-0 text-center'}>Feedback Form</h1>
            <p className={'text-center'}>This should work, as long as the data gets sent to the right place...</p>
          </div>
          <form action={'/submit-feedback'} method={'POST'} ref={formRef}
                className={'flex flex-col items-center gap-6'}>
            <TextField label={"Your Name"} placeholder={"John Smith"} className={'self-stretch'} />
            <TextField label={"Your Email"} placeholder={"john.smith@example.com"} className={'self-stretch'} />
            <TextField label={"Your Feedback"} placeholder={"This is great!"} className={'self-stretch'} />
            <TextField label={"Rating out of Five"} placeholder={"5/5"} className={'self-stretch'} />
            <Button variant={'contained'} size={'large'} type={"button"} onClick={submitForm} className={'mt-6'}>Submit</Button>
          </form>
        </CardContent>
      </Card>
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