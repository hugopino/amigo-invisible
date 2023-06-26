import { ReactElement } from "react";

interface TableButtonProps {
  color: string;
  Icon: (props: React.ComponentProps<"svg">) => ReactElement;
  text: string;
  onClick: () => void;
}

export default function TableButton({
  color,
  Icon,
  text,
  onClick,
}: TableButtonProps) {
  let colorClass;
  switch (color) {
    case "red":
      colorClass = "text-red-500 hover:text-red-700";
      break;
    case "green":
      colorClass = "text-green-500 hover:text-green-700";
      break;
    default:
      colorClass = "text-gray-500 hover:text-gray-700";
      break;
  }

  return (
    <button className={`${colorClass} font-medium py-2 px-4`} onClick={onClick}>
      <Icon className="h-5 w-5 inline-block mr-1" /> {text}
    </button>
  );
}
