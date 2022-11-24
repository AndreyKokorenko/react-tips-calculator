import { StyledButton } from "./styles";
import { IButton } from "../../types/types";

export const Button = ({ disabled, type, children }: IButton) => {
  return (
    <StyledButton disabled={disabled} type={type}>
      {children}
    </StyledButton>
  );
};
