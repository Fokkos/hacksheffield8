'use client'

export const vineBoom: () => HTMLAudioElement = () => new window.Audio("/audio/vineboom.mp3");

const yaySounds = [
  new window.Audio('/audio/tada.mp3'),
  new window.Audio('/audio/yippee.mp3'),
  new window.Audio('/audio/child_yay.mp3'),
  new window.Audio('/audio/holy_moly.mp3'),
  new window.Audio('/audio/tacobell.mp3'),
  new window.Audio('/audio/doot.mp3'),
]

export function playSound(sndfile: HTMLAudioElement) {
  sndfile.play();
}

export function randomYay() {
  return yaySounds[Math.floor(Math.random()*yaySounds.length)]
}