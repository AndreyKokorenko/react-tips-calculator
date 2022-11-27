import { ChangeEvent } from "react";
import { StyledInput } from "./styles";

interface IInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const Input = (props: IInputProps) => {
  return <StyledInput {...props} />;
};
