import {getCookie, hasCookie, setCookie} from "cookies-next";

export const findHack = (hackName: string) => {
  let score = hasCookie('score')? parseInt(getCookie('score')?.toString() as string) : 0;
  let hacksFound = hasCookie('hacksFound')? getCookie('hacksFound')?.toString() as string : "";
  if(!hacksFound.includes(hackName)) {
    setCookie("score", (score + 1).toString());
    window.dispatchEvent(new Event('scoreUpdate'));
    setCookie('hacksFound', hacksFound + hackName + '-')
  }
}

export const resetScore = () => {
  setCookie('score', '0');
  window.dispatchEvent(new Event('scoreUpdate'));
  setCookie('hacksFound', '');
}