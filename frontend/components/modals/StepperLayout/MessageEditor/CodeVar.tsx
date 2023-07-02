import { Tooltip as ReactTooltip } from "react-tooltip";

export default function CodeVar({
  children,
  description,
}: {
  children: string;
  description: string;
}) {
  return (
    <>
      <code
        id={children}
        className="font-mono bg-gray-100 text-red-500 px-1 py-0.5 border border-gray-400 rounded-md text-sm whitespace-nowrap mb-1"
      >
        {children}
      </code>
      <ReactTooltip
        anchorId={children}
        place="bottom"
        variant="info"
        content={description}
      />
    </>
  );
}
