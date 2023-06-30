export interface FunctionalButtonProps {
  color: string;
  Icon: (props: React.ComponentProps<"svg">) => ReactElement;
  text: string;
  onClick?: () => void;
}
