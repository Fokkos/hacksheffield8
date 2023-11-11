import Image from 'next/image'
import IntroModal from "@/components/IntroModal";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <IntroModal />
    </main>
  )
}
