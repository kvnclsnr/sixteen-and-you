import type React from "react";
import { ICONS } from "../utils/constants";
import { Day1, Day10, Day2, Day3, Day4, Day5, Day6, Day7, Day8, Day9 } from "../days/days";

interface CardContent {
  title: string;
  iconName: string;
  content: React.ReactNode
}

export const CARD_CONTENT: CardContent[] = [
  {
    title: "El comienzo",
    iconName: ICONS.SUNRISE,
    content: <Day1/>
  },
  {
    title: "Cositas de ti",
    iconName: ICONS.RAIN,
    content: <Day2/>
  },
  {
    title: "Un recuerdo",
    iconName: ICONS.BLINK,
    content: <Day3/>
  },
  {
    title: "Album",
    iconName: ICONS.ALBUM,
    content: <Day4/>
  },
  {
    title: "Si pudiera",
    iconName: ICONS.GET_BACK,
    content: <Day5/>
  },
  {
    title: "Mini quiz",
    iconName: ICONS.QUIZ,
    content: <Day6/>
  },
  {
    title: "Una canción",
    iconName: ICONS.SONG,
    content: <Day7/>
  },
  {
    title: "Tu playlist",
    iconName: ICONS.PLAYLIST,
    content: <Day8/>
  },
  {
    title: "La mitad",
    iconName: ICONS.HALF,
    content: <Day9/>
  },
  {
    title: "Te toca",
    iconName: ICONS.PRESS,
    content: <Day10/>
  },
  {
    title: "none",
    iconName: ICONS.EXIT,
    content: <Day1/>
  },
  {
    title: "16 Razones",
    iconName: ICONS.CARDS,
    content: <Day1/>
  },
  {
    title: "none",
    iconName: ICONS.EXIT,
    content: <Day1/>
  },
  {
    title: "none",
    iconName: ICONS.EXIT,
    content: <Day1/>
  },
  {
    title: "none",
    iconName: ICONS.EXIT,
    content: <Day1/>
  },
  {
    title: "none",
    iconName: ICONS.EXIT,
    content: <Day1/>
  },
];