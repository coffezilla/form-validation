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

const RadioboxField = ({
  errors,
  field,
  register,
  label = field,
  options = [],
}: IProps) => {
  const errorMessage = errors[field as keyof TFormValues]?.message;

  return (
    <label className="block border border-black py-2 px-2 bg-gray-100">
      <span className="block">
        {label} ({field}):
      </span>

      {options.map((selectOption: { value: string; title: string }) => {
        return (
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <input
              type="radio"
              value={selectOption.value}
              title={selectOption.value}
              {...register(field)}
            />
            <span className="block">{selectOption.title}</span>
          </label>
        );
      })}

      {errorMessage && <p className="bg-red-400">{errorMessage}</p>}
    </label>
  );
};

export default memo(RadioboxField);
