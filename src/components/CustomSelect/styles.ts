import { StylesConfig } from "react-select";
import { IOption } from "../../types/types";

export const styles: StylesConfig<IOption> = {
  container: (baseStyles, state) => ({
    ...baseStyles,
    "@media (max-width: 480px)": {
      ...baseStyles,
      width: "290px",
      margin: "auto",
    },
  }),
  control: (baseStyles) => ({
    ...baseStyles,
    borderRadius: "30px",
    height: "68px",
    border: "0",
  }),
  singleValue: (baseStyles) => ({
    ...baseStyles,
    margin: "auto",
    paddingLeft: "30px",
  }),
};
