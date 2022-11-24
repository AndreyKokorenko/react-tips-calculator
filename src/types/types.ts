import { ChangeEvent, ReactNode } from "react";

export interface IOption {
  value: number;
  label: string;
}

export interface IInput {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export interface ISelect {
  onChange: IOption | any;
  value: IOption;
  options: IOption[];
}

export interface IButton {
  disabled: boolean;
  type: "button" | "submit" | "reset";
  children: ReactNode;
}
