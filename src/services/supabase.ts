import { createClient } from "@supabase/supabase-js";
import { setStorageProperty } from "./storage";

const sbURL = import.meta.env.VITE_SUPABASE_URL;
const sbKEY = import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY;

export const supabase = createClient(
  sbURL, sbKEY
);

const createUsername = async () => {
  const { count, error } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true });
  
  if (error) {
    console.error("Error:", error);
    return;
  }
  
  if (count === null) {
    return;
  }
  
  return `user-${count + 1}`;
};

export const createNewUser = async () => {
  const username = await createUsername();
  
  setStorageProperty({user: username});
  
  const { error } = await supabase
    .from("users")
    .insert({
      username: username,
      love_counter: 0,
    });
  
  if (error) {
    console.error("Error:", error);
    return;
  }
};

export const addLoveCounter = async (username: string) => {
  const { error } = await supabase.rpc(
    "add_love_counter",
    {
      p_username: username,
    }
  );
  
  if (error) {
    console.error("Error:", error);
    return;
  }
};