'use client'

export const vineBoom: () => HTMLAudioElement = () => new Audio("/audio/vineboom.mp3");

const yaySounds = [
  new Audio('/audio/tada.mp3'),
  new Audio('/audio/yippee.mp3'),
  new Audio('/audio/child_yay.mp3'),
  new Audio('/audio/holy_moly.mp3'),
  new Audio('/audio/tacobell.mp3'),
  new Audio('/audio/doot.mp3'),
]

export function playSound(sndfile: HTMLAudioElement) {
  sndfile.play();
}

export function randomYay() {
  return yaySounds[Math.floor(Math.random()*yaySounds.length)]
}