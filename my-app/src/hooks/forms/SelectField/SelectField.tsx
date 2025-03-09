import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
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

const SelectField = ({
  errors,
  field,
  register,
  label = field,
  placeholder = "",
  options = [],
}: IProps) => {
  return (
    <label className="block border border-black py-2 px-2 bg-gray-100">
      <span className="block">
        {label} ({field}):
      </span>
      <select
        {...register(field)}
        title={field}
        id={field}
        className="border border-black"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((selectOption: { value: string; title: string }) => {
          return (
            <option key={selectOption.value} value={selectOption.value}>
              {selectOption.title}
            </option>
          );
        })}
      </select>
      {errors[field as keyof TFormValues] && (
        <p className="bg-red-400">{errors[field]?.message}</p>
      )}
    </label>
  );
};

export default memo(SelectField);
