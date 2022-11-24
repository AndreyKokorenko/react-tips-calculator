import { FormEvent, useEffect, useState } from "react";
import { Button } from "../Button/Button";
import { CustomSelect } from "../CustomSelect/CustomSelect";
import { Input } from "../Input/Input";
import { StyledForm, TotalTips, Title, Subtitle } from "./styles";
import { IOption } from "../../types/types";
import { useInput } from "../../hooks/useInput";

const options: IOption[] = [
  { value: 10, label: "10%" },
  { value: 20, label: "20%" },
  { value: 30, label: "30%" },
];

export const Form = () => {
  const billAmount = useInput();
  const paymentAmountPerson = useInput();
  const [amountPerson, setAmountPerson] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(options[0]);
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    billAmount.value.length === 0 || paymentAmountPerson.value.length === 0
      ? setIsDisabled(true)
      : setIsDisabled(false);
  }, [billAmount.value.length, paymentAmountPerson.value.length]);

  const billSum = +Object.values(billAmount)[0];
  const enterPersons = +Object.values(paymentAmountPerson)[0];

  const calculate = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    return billSum !== 0 && enterPersons !== 0
      ? setAmountPerson(
        (billSum + (billSum * Number(tipPercentage.value)) / 100) /
          enterPersons
      )
      : 0;
  };

  const handleTipPercentageChange = (newValue: IOption | any) => {
    setTipPercentage(newValue);
  };

  return (
    <StyledForm onSubmit={calculate}>
      <Title>Welcome to App</Title>
      <Subtitle>Let’s go calculate your tips</Subtitle>
      <Input placeholder="Enter bill" {...billAmount} type="number" />
      <Input
        placeholder="Enter persons"
        {...paymentAmountPerson}
        type="number"
      />
      <CustomSelect
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
