import Select from "react-select";
import { IOption } from "../../types/types";
import { styles } from "./styles";

interface ISelectProps {
  onChange: (newValue: IOption | null) => void;
  value: IOption;
  options: IOption[];
  isSearchable: boolean;	
}

export const CustomSelect = (props: ISelectProps) => {
  return <Select isMulti={false} {...props} styles={styles} />;
};
