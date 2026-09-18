interface DividerProps {
  id?: string;
}

export const Divider = ({id = undefined}: DividerProps) => {
  return (
    <div className = "divider" id = {id}></div>
  );
};