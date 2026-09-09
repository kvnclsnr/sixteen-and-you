import { Branding, ThemeButton } from "../../components/components.tsx";

export const Header = () => {
  return (
    <header className = "header">
      <Branding/>
      <ThemeButton/>
    </header>
  );
};