import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import { formSchema, TFormValues } from "./schemas/formAddUserSchema";

import InputField from "./hooks/forms/InputField/InputField";
import SelectField from "./hooks/forms/SelectField/SelectField";
import { useEffect } from "react";
import CheckboxField from "./hooks/forms/CheckboxField/CheckboxField";
import RadioboxField from "./hooks/forms/RadioboxField/RadioboxField";
import TextareaField from "./hooks/forms/TextareaField/TextareaField";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   genre: "Gay",
    // },
  });

  // submit
  const onSubmitAddUser: SubmitHandler<TFormValues> = (data) => {
    // check password is equal
    console.log("data submitted", data);
  };

  useEffect(() => {
    // reset({ genre: "male" });
  }, [reset]);

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <form onSubmit={handleSubmit(onSubmitAddUser)}>
          <InputField register={register} errors={errors} field="name" />
          <InputField register={register} errors={errors} field="email" />
          <InputField
            register={register}
            errors={errors}
            field="salary"
            maskInput={"MONEY"}
            setValue={setValue}
          />
          <InputField
            register={register}
            errors={errors}
            field="raise"
            maskInput={"PERCENTAGE"}
            setValue={setValue}
          />
          <InputField
            register={register}
            errors={errors}
            field="cep"
            maskInput={"CEP"}
            setValue={setValue}
          />
          <InputField
            register={register}
            errors={errors}
            field="phone"
            maskInput={"PHONE"}
            setValue={setValue}
          />
          <InputField
            register={register}
            errors={errors}
            field="cpf"
            maskInput={"CPF"}
            setValue={setValue}
          />
          <InputField
            register={register}
            errors={errors}
            field="workdays"
            maskInput={"NUMBER"}
            setValue={setValue}
          />
          <InputField register={register} errors={errors} field="password" />
          <InputField register={register} errors={errors} field="repassword" />
          <InputField
            register={register}
            errors={errors}
            field="age"
            maskInput={"NUMBER"}
            setValue={setValue}
          />
          <InputField
            register={register}
            errors={errors}
            field="birthday"
            maskInput={"DATE"}
            setValue={setValue}
          />
          <SelectField
            register={register}
            errors={errors}
            field="genre"
            options={[
              { value: "male", title: "Male" },
              { value: "female", title: "Female" },
            ]}
          />
          <CheckboxField register={register} errors={errors} field="agree" />
          <RadioboxField
            register={register}
            errors={errors}
            field="theme"
            options={[
              { value: "light", title: "Light" },
              { value: "dark", title: "Dark" },
            ]}
          />
          <TextareaField register={register} errors={errors} field="title" />
          <TextareaField
            register={register}
            errors={errors}
            field="description"
          />

          <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 px-2 py-2"
          >
            Cadastrar
          </button>
        </form>
        <div>
          <pre>{JSON.stringify(watch(), null, 1)}</pre>
        </div>
      </div>
    </>
  );
}

export default App;
