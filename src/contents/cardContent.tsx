import type React from "react";
import { ICONS } from "../utils/constants";

interface CardContent {
  title: string;
  iconName: string;
  content?: React.ReactNode
}

export const CARD_CONTENT: CardContent[] = [
  {
    title: "a",
    iconName: ICONS.DARK,
  },
  {
    title: "b",
    iconName: ICONS.LIGHT,
  },
  {
    title: "c",
    iconName: ICONS.HEART,
  },
  {
    title: "d",
    iconName: ICONS.PAUSE,
  },
  {
    title: "e",
    iconName: ICONS.PLAY,
  },
  {
    title: "f",
    iconName: ICONS.DARK,
  },
  {
    title: "g",
    iconName: ICONS.DARK,
  },
  {
    title: "h",
    iconName: ICONS.DARK,
  },
  {
    title: "i",
    iconName: ICONS.DARK,
  },
  {
    title: "j",
    iconName: ICONS.DARK,
  },
  {
    title: "k",
    iconName: ICONS.DARK,
  },
  {
    title: "l",
    iconName: ICONS.DARK,
  },
  {
    title: "m",
    iconName: ICONS.DARK,
  },
  {
    title: "n",
    iconName: ICONS.DARK,
  },
  {
    title: "o",
    iconName: ICONS.DARK,
  },
  {
    title: "p",
    iconName: ICONS.DARK,
  },
];