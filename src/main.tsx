import "./styles/main.scss";

import { setInitialTheme } from "./core/theme.ts";

import { App } from "./app.tsx";

import { createRoot, type Root } from "react-dom/client";

setInitialTheme();

const root: Root = createRoot(document.getElementById("root")!);

root.render(
  <>
  <App></App>
  </>
);