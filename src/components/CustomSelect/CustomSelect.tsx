import Select from "react-select";
import { ISelect } from "../../types/types";
import { styles } from "./styles";

export const CustomSelect = (props: ISelect) => {
  return <Select styles={styles} {...props}/>;
};
