import { FormEvent, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, TotalTips, Title, Subtitle } from "./styles";
import { IOption } from "../../types/types";
import { useInput } from "../../hooks/useInput";

const options: IOption[] = [
  { value: "10", label: "10%" },
  { value: "15", label: "15%" },
  { value: "20", label: "20%" },
];

export const Form = () => {
  const billAmount = useInput();
  const paymentAmountPerson = useInput();
  const [amountPerson, setAmountPerson] = useState(0);
  const [tipPercentage, setTipPercentage] = useState<IOption>(options[0]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    billAmount.value && paymentAmountPerson.value
      ? setIsDisabled(false)
      : setIsDisabled(true);
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setAmountPerson(
      (+billAmount.value + (+billAmount.value * +tipPercentage.value) / 100) /
        +paymentAmountPerson.value
    );
  };

  const handleTipPercentageChange = (newValue: IOption | null) => {
    if (newValue) {
      setTipPercentage(newValue);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input placeholder="Enter bill" {...billAmount} type="number" />
      <Input
        placeholder="Enter persons"
        {...paymentAmountPerson}
        type="number"
      />
      <CustomSelect
        isSearchable={false}
        onChange={handleTipPercentageChange}
        value={tipPercentage}
        options={options}
      />
      <TotalTips>Total: {amountPerson.toFixed(2)} $</TotalTips>
      <Button type="submit" disabled={isDisabled}>
        Ohhhoooo 🍻
      </Button>
    </StyledForm>
  );
};
