'use client'
import React from 'react';
import {findHack} from "@/helpers/score";
import TextField from "@mui/material/TextField";
import {Card, CardActions, CardContent} from "@mui/material";
import Button from "@mui/material/Button";
import HackFoundModal from "@/components/HackFoundModal";

export default function FeedbackForm(): React.ReactNode {
  const formRef: React.MutableRefObject<HTMLFormElement | null> = React.useRef<HTMLFormElement>(null);
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
        <HackFoundModal title={"Broken Access Control Found!"}>
          <p className="text-gray-800">
            Oops - turns out we are not authenticating users after a POST request is made!<br className={'mb-2'} />
            This is a great example of <strong>missing access controls</strong>. One thing you can do to avoid this issue is to follow the principle of &lsquo;Deny by Default&rsquo; (make all user roles unable to access anything unless you explicitly allow them to). The <a href={'https://cheatsheetseries.owasp.org/cheatsheets/Authorization_Cheat_Sheet.html'} className={'underline cursor-pointer text-gray-800 hover:text-gray-500'}>Authorisation Cheatsheet by OWASP</a> is a great source of information on preventing this vulnerability.
          </p>
        </HackFoundModal>
      )}
    </>
  )
}