import { ReactElement } from "react";

interface TableButtonProps {
  color: string;
  Icon: (props: React.ComponentProps<"svg">) => ReactElement;
  text: string;
}

export default function TableButton({ color, Icon, text }: TableButtonProps) {
  return (
    <button
      className={`text-${color}-500 hover:text-${color}-700 font-medium py-2 px-4`}
    >
      <Icon className="h-5 w-5 inline-block mr-1" /> {text}
    </button>
  );
}
