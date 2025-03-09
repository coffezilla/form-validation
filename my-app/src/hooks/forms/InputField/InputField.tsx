import { FieldErrors, UseFormRegister, UseFormSetValue } from "react-hook-form";
import { TFormValues } from "../../../schemas/formAddUserSchema";
import { memo } from "react";
import { handleBlurMask, handleChangeMask } from "../utils.InputField";

interface IProps {
  register: UseFormRegister<TFormValues>;
  errors: FieldErrors<TFormValues>;
  field: keyof TFormValues;
  label?: string;
  placeholder?: string;
  setValue?: UseFormSetValue<TFormValues>;
  maskInput?:
    | "DATE"
    | "NUMBER"
    | "CPF"
    | "CEP"
    | "PHONE"
    | "PERCENTAGE"
    | "MONEY";
}

const InputField = ({
  errors,
  field,
  register,
  label = field,
  setValue,
  maskInput,
  placeholder = "",
}: IProps) => {
  const inputProps: React.InputHTMLAttributes<HTMLInputElement> = {
    ...register(field),
    className: "border border-black",
    id: field,
    title: field,
    placeholder: placeholder,
    type: "text",
  };

  // MONEY
  if (maskInput === "MONEY") {
    inputProps.onBlur = (e) => handleBlurMask(e, setValue, "MONEY");
  }
  // DATE
  if (maskInput === "DATE") {
    inputProps.onChange = (e) => handleChangeMask(e, setValue, "DATE");
    inputProps.onBlur = (e) => handleBlurMask(e, setValue, "DATE");
  }

  // CPF
  if (maskInput === "CPF") {
    inputProps.onChange = (e) => handleChangeMask(e, setValue, "CPF");
  }
  // CEP
  if (maskInput === "CEP") {
    inputProps.onChange = (e) => handleChangeMask(e, setValue, "CEP");
  }
  // PHONE
  if (maskInput === "PHONE") {
    inputProps.onChange = (e) => handleChangeMask(e, setValue, "PHONE");
  }
  // PERCENTAGE
  if (maskInput === "PERCENTAGE") {
    inputProps.onBlur = (e) => handleBlurMask(e, setValue, "PERCENTAGE");
  }
  // NUMBER
  if (maskInput === "NUMBER") {
    inputProps.onBlur = (e) => handleBlurMask(e, setValue, "NUMBER");
  }

  return (
    <label className="block border border-black py-2 px-2 bg-gray-100">
      <span className="block">
        {label} ({field}):
      </span>

      <input {...inputProps} />

      {errors[field as keyof TFormValues] && (
        <p className="bg-red-400">{errors[field]?.message}</p>
      )}
    </label>
  );
};

export default memo(InputField);
