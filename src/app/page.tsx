import Image from 'next/image'
import IntroModal from "@/components/IntroModal";

export default function Home() {

  return (
    <main className={'w-full md:w-1/2 mx-auto mt-24 flex flex-col items-center'}>
      <h1 className="text-md text-gray-500 text-center">
        NOTE: This website is far better experienced with sound on (make sure autoplay of audio is allowed)
      </h1>
      <ul>
        <li>
          <a href={'https://support.mozilla.org/en-US/kb/block-autoplay'} className={'text-sm text-gray-500 cursor-pointer underline hover:text-gray-700'}>
            Where to find autoplay settings on Firefox
          </a>
        </li>
        <li>
          <a href={'https://nerdschalk.com/how-to-disable-autoplay-on-google-chrome/'} className={'text-sm text-gray-500 cursor-pointer underline hover:text-gray-700'}>
            Where to find autoplay settings on Chrome
          </a>
        </li>
        <li>
          <a href={'https://memrise.zendesk.com/hc/en-us/articles/360015889117-How-can-I-allow-audio-to-auto-play-on-Safari-'} className={'text-sm text-gray-500 cursor-pointer underline hover:text-gray-700'}>
            Where to find autoplay settings on Safari
          </a>
        </li>
        <li>
          <a href={'https://www.makeuseof.com/manage-autoplay-settings-microsoft-edge/'} className={'text-sm text-gray-500 cursor-pointer underline hover:text-gray-700'}>
            Where to find autoplay settings on Microsoft Edge
          </a>
        </li>
      </ul>

      <IntroModal />
    </main>
  )
}
