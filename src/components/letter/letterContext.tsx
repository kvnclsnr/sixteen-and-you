import { createContext } from "react";

export const LetterContext = createContext<(() => void) | null>(null);