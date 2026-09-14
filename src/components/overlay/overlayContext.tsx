import { createContext } from "react";

export const OverlayContext = createContext<(() => void) | null>(null);