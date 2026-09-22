import type React from "react";
import { ICONS } from "../utils/constants";
import { Day1, Day2, Day3, Day4, Day5, Day6, Day7, Day8 } from "../days/days";

interface CardContent {
  title: string;
  iconName: string;
  content: React.ReactNode
}

export const CARD_CONTENT: CardContent[] = [
  {
    title: "El Comienzo",
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
    title: "Mini quiz",
    iconName: ICONS.QUIZ,
    content: <Day5/>
  },
  {
    title: "Si pudiera",
    iconName: ICONS.GET_BACK,
    content: <Day6/>
  },
  {
    title: "Una canción",
    iconName: ICONS.SONG,
    content: <Day7/>
  },
  {
    title: "Tu Playlist",
    iconName: ICONS.PLAYLIST,
    content: <Day8/>
  },
  {
    title: "i",
    iconName: ICONS.DARK,
    content: <Day1/>
  },
  {
    title: "j",
    iconName: ICONS.DARK,
    content: <Day1/>
  },
  {
    title: "k",
    iconName: ICONS.DARK,
    content: <Day1/>
  },
  {
    title: "l",
    iconName: ICONS.DARK,
    content: <Day1/>
  },
  {
    title: "m",
    iconName: ICONS.DARK,
    content: <Day1/>
  },
  {
    title: "n",
    iconName: ICONS.DARK,
    content: <Day1/>
  },
  {
    title: "o",
    iconName: ICONS.DARK,
    content: <Day1/>
  },
  {
    title: "p",
    iconName: ICONS.DARK,
    content: <Day1/>
  },
];