import "./styles/main.scss";

import { setInitialTheme } from "./core/theme.ts";

import { App } from "./app.tsx";

import { createRoot, type Root } from "react-dom/client";
import { loadStorage, storage } from "./services/storage.ts";
import { createNewUser } from "./services/supabase.ts";

loadStorage();
setInitialTheme();

console.log(storage.user);

if (storage.user === null) {
  createNewUser();
}

const root: Root = createRoot(document.getElementById("root")!);

root.render(
  <>
  <App></App>
  </>
);