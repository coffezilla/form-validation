import { UseFormSetValue } from "react-hook-form";
import { maskToCep } from "../../helpers/masks/address";
import { maskFixToMoney } from "../../helpers/masks/currency";
import {
  maskFixToPercentage,
  maskToOnlyNumbers,
} from "../../helpers/masks/numbers";
import { maskToCpf } from "../../helpers/masks/personal";
import { maskToPhoneNumber } from "../../helpers/masks/phone";
import { maskFixToDate, maskToDate } from "../../helpers/masks/time";
import { TFormValues } from "../../schemas/formAddUserSchema";
import { TMasksBlur, TMasksChange } from "./InputField/InputField.types";

// onBlur event to fix some mask after blur event
export const handleBlurMask = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<TFormValues>,
  mask: TMasksBlur
) => {
  console.log("Loco");
  const { value, name } = e.target;
  let newValue = value;
  if (mask === "MONEY")
    newValue = maskFixToMoney(value, "", "commam", "commam");
  if (mask === "PERCENTAGE") newValue = maskFixToPercentage(value);
  if (mask === "NUMBER") newValue = maskToOnlyNumbers(value);
  if (mask === "DATE") newValue = maskFixToDate(value);
  setValue(name as keyof TFormValues, newValue);
};

// onChange event to have a real-time mask
export const handleChangeMask = (
  e: React.ChangeEvent<HTMLInputElement>,
  setValue: UseFormSetValue<TFormValues>,
  mask: TMasksChange
) => {
  const { value, name } = e.target;
  let newValue = value;
  if (mask === "PHONE") newValue = maskToPhoneNumber(value);
  if (mask === "CEP") newValue = maskToCep(value);
  if (mask === "CPF") newValue = maskToCpf(value);
  if (mask === "DATE") newValue = maskToDate(value);
  setValue(name as keyof TFormValues, newValue);
};
