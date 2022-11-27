import { StyledButton } from "./styles";
import { ReactNode } from "react";

interface IButtonProps {
  disabled: boolean;
  type: "button" | "submit" | "reset";
  children: ReactNode;
}

export const Button = (props : IButtonProps) => {
  return (
    <StyledButton {...props}>
      {props.children}
    </StyledButton>
  );
};
