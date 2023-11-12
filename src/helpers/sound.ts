'use client'

export function playSound(sndfile: HTMLAudioElement) {
  sndfile.play().catch(DOMException => {});
}