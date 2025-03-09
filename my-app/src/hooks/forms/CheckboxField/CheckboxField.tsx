import { FieldErrors, UseFormRegister } from "react-hook-form";
import { TFormValues } from "../../../schemas/formAddUserSchema";
import { memo } from "react";

interface IProps {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors<TFormValues>;
  field: keyof TFormValues;
  label?: string;
  placeholder?: string;
  options?: { value: string; title: string }[];
}

const CheckboxField = ({ errors, field, register, label = field }: IProps) => {
  const errorMessage = errors[field as keyof TFormValues]?.message;

  return (
    <label className="block border border-black py-2 px-2 bg-gray-100">
      <span className="block">
        {label} ({field}):
      </span>
      <input
        {...register(field)}
        title={field}
        type="checkbox"
        className="mr-2" // Add margin for better spacing
      />
      {errorMessage && <p className="bg-red-400">{errorMessage}</p>}
    </label>
  );
};

export default memo(CheckboxField);
