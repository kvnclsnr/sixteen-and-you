import { createContext } from "react";

export const HomeContext = createContext<((cards: number) => void) | null>(null);