import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  formSchema,
  onSubmitAddUser,
  TFormValues,
} from "./schemas/formAddUserSchema";
import { maskToPhoneNumber } from "./helpers/masks/phone";
import { maskToCep } from "./helpers/masks/address";
import { maskToCpf } from "./helpers/masks/personal";
import { maskToMoney } from "./helpers/masks/currency";
import { maskToOnlyNumbers, maskToPercentage } from "./helpers/masks/numbers";
import { maskToDate } from "./helpers/masks/time";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm<TFormValues>({
    resolver: zodResolver(formSchema),
  });

  const watchAllFields = watch();

  const handleMask = (
    e: React.ChangeEvent<HTMLInputElement>,
    mask:
      | "PHONE"
      | "CEP"
      | "CPF"
      | "MONEY"
      | "PERCENTAGE"
      | "NUMBER"
      | "DATE"
      | "" = ""
  ) => {
    const { value, name } = e.target;
    let newValue = value;
    if (mask === "PHONE") newValue = maskToPhoneNumber(value);
    if (mask === "CEP") newValue = maskToCep(value);
    if (mask === "CPF") newValue = maskToCpf(value);
    if (mask === "MONEY") newValue = maskToMoney(value);
    if (mask === "PERCENTAGE") newValue = maskToPercentage(value);
    if (mask === "NUMBER") newValue = maskToOnlyNumbers(value);
    if (mask === "DATE") newValue = maskToDate(value);
    setValue(name as keyof TFormValues, newValue);
  };

  const handleBlurMask = (
    e: React.ChangeEvent<HTMLInputElement>,
    mask:
      | "PHONE"
      | "CEP"
      | "CPF"
      | "MONEY"
      | "PERCENTAGE"
      | "NUMBER"
      | "DATE"
      | "" = ""
  ) => {
    const { value, name } = e.target;
    let newValue = value;
    if (mask === "PHONE") newValue = maskToPhoneNumber(value);
    if (mask === "CEP") newValue = maskToCep(value);
    if (mask === "CPF") newValue = maskToCpf(value);
    if (mask === "MONEY") newValue = maskToMoney(value, "", "commam", "commam");
    if (mask === "PERCENTAGE") newValue = maskToPercentage(value);
    if (mask === "NUMBER") newValue = maskToOnlyNumbers(value);
    if (mask === "DATE") newValue = maskToDate(value);
    setValue(name as keyof TFormValues, newValue);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <form onSubmit={handleSubmit(onSubmitAddUser)}>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Nome (name)</span>
            <input
              {...register("name")}
              className="border border-black"
              id="name"
              title="name"
              type="text"
            />
            {errors.name && <p>{errors.name.message}</p>}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">E-mail (email):</span>
            <input
              {...register("email")}
              className="border border-black"
              id="email"
              title="email"
              type="email"
            />
            {errors.email && <p>{errors.email.message}</p>}
          </label>
          <label className="block border border-black py-2 px-2 bg-green-100">
            <span className="block">
              [ERROR] Salário (salary) (máscara dinheiro)
            </span>
            <input
              {...register("salary")}
              // onChange={(e) => handleMask(e, "MONEY")}
              onBlur={(e) => handleBlurMask(e, "MONEY")}
              className="border border-black"
              id="salary"
              title="salary"
              type="salary"
            />
            {errors.salary && <p>{errors.salary.message}</p>}
          </label>
          <label className="block border border-black py-2 px-2 bg-green-100">
            <span className="block">
              [ERROR] Aumento (raise) (máscara porcentagem)
            </span>
            <input
              {...register("raise")}
              onChange={(e) => handleMask(e, "PERCENTAGE")}
              className="border border-black"
              id="raise"
              title="raise"
              type="raise"
            />
            {errors.raise && <p>{errors.raise.message}</p>}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">CEP (cep) (máscara cep)</span>
            <input
              {...register("cep")}
              onChange={(e) => handleMask(e, "CEP")}
              className="border border-black"
              id="cep"
              title="cep"
              type="cep"
            />
            {errors.cep && <p>{errors.cep.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Phone (phone) (máscara phone)</span>
            <input
              {...register("phone")}
              onChange={(e) => handleMask(e, "PHONE")}
              className="border border-black"
              id="phone"
              title="phone"
              type="phone"
            />
            {errors.phone && <p>{errors.phone.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">CPF (cpf) (máscara cpf)</span>
            <input
              {...register("cpf")}
              onChange={(e) => handleMask(e, "CPF")}
              className="border border-black"
              id="cpf"
              title="cpf"
              type="cpf"
            />
            {errors.cpf && <p>{errors.cpf.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Dias trabalhados (workdays)</span>
            <input
              {...register("workdays")}
              onChange={(e) => handleMask(e, "NUMBER")}
              className="border border-black"
              id="workdays"
              type="text"
            />
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Senha (password)</span>
            <input
              {...register("password")}
              className="border border-black"
              id="password"
              title="password"
              type="password"
            />
            {errors.password && <p>{errors.password.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Confirmar senha (repassword)</span>
            <input
              {...register("repassword")}
              className="border border-black"
              id="repassword"
              title="repassword"
              type="repassword"
            />
            {errors.repassword && <p>{errors.repassword.message}</p>}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Idade (age) Só número:</span>
            <input
              {...register("age")}
              onChange={(e) => handleMask(e, "NUMBER")}
              className="border border-black"
              id="age"
              title="age"
              type="age"
            />
            {errors.age && <p>{errors.age.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-green-100">
            <span className="block">
              [ERROR] Data de nascimento (birthday) (Máscara data):
            </span>
            <input
              {...register("birthday")}
              onChange={(e) => handleMask(e, "DATE")}
              className="border border-black"
              id="birthday"
              title="birthday"
              type="birthday"
            />
            {errors.birthday && <p>{errors.birthday.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <select
              {...register("genre")}
              title="genre"
              id="genre"
              className="border border-black"
            >
              <option value="">-- Choose --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
            {errors.genre && <p>{errors.genre.message}</p>}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Concordo (agree)</span>
            <input {...register("agree")} title="agree" type="checkbox" />
            {errors.agree && <p>{errors.agree.message}</p>}
          </label>

          <label className="block border border-black py-2 px-2 bg-gray-100">
            <input
              type="radio"
              value="light"
              title="light"
              {...register("theme")}
            />
            <span className="block">Preferência Light (theme)</span>
          </label>

          <label className="block border border-black py-2 px-2 bg-gray-100">
            <input
              type="radio"
              value="dark"
              title="dark"
              {...register("theme")}
            />

            <span className="block">Preferência Dark (theme)</span>
          </label>
          {errors.theme && <p>{errors.theme.message}</p>}

          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Título (title) (Obrigatório)</span>
            <textarea
              id="title"
              title="title"
              className="border border-black"
              {...register("title")}
            />
            {errors.title && <p>{errors.title.message}</p>}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Descrição (description) (Opcional)</span>
            <textarea
              id="description"
              title="description"
              className="border border-black"
              {...register("description")}
            />
            {errors.description && <p>{errors.description.message}</p>}
          </label>
          <button
            type="submit"
            className="bg-green-400 hover:bg-green-600 px-2 py-2"
          >
            Cadastrar
          </button>
        </form>
        <div>
          <pre>{JSON.stringify(watchAllFields, null, 1)}</pre>
        </div>
      </div>
    </>
  );
}

export default App;
