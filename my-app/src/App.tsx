import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import { formSchema, TFormValues } from "./schemas/formAddUserSchema";

import InputField from "./hooks/forms/InputField/InputField";

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

  // submit
  const onSubmitAddUser: SubmitHandler<TFormValues> = (data) => {
    // check password is equal
    console.log("data submitted", data);
  };

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
          {/* <InputField register={register} errors={errors} field="genre"  /> */}
          {/* <InputField register={register} errors={errors} field="agree" /> */}
          {/* <InputField register={register} errors={errors} field="theme" /> */}
          {/* <InputField register={register} errors={errors} field="description" /> */}
          {/* <InputField register={register} errors={errors} field="title" /> */}

          {/* <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Nome (name)</span>
            <input
              {...register("name")}
              className="border border-black"
              id="name"
              title="name"
              type="text"
            />
            {errors.name && <p className="bg-red-400">{errors.name.message}</p>}
          </label> */}
          {/* <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">E-mail (email):</span>
            <input
              {...register("email")}
              className="border border-black"
              id="email"
              title="email"
              type="email"
            />
            {errors.email && (
              <p className="bg-red-400">{errors.email.message}</p>
            )}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Salário (salary) (máscara dinheiro)</span>
            <input
              {...register("salary")}
              onBlur={(e) => handleBlurMask(e, "MONEY")}
              className="border border-black"
              id="salary"
              title="salary"
              type="salary"
            />
            {errors.salary && (
              <p className="bg-red-400">{errors.salary.message}</p>
            )}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Aumento (raise) (máscara porcentagem)</span>
            <input
              {...register("raise")}
              onBlur={(e) => handleBlurMask(e, "PERCENTAGE")}
              className="border border-black"
              id="raise"
              title="raise"
              type="raise"
            />
            {errors.raise && (
              <p className="bg-red-400">{errors.raise.message}</p>
            )}
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
            {errors.cep && <p className="bg-red-400">{errors.cep.message}</p>}{" "}
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
            {errors.phone && (
              <p className="bg-red-400">{errors.phone.message}</p>
            )}{" "}
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
            {errors.cpf && <p className="bg-red-400">{errors.cpf.message}</p>}{" "}
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
            {errors.password && (
              <p className="bg-red-400">{errors.password.message}</p>
            )}{" "}
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
            {errors.repassword && (
              <p className="bg-red-400">{errors.repassword.message}</p>
            )}
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
            {errors.age && <p className="bg-red-400">{errors.age.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">
              Data de nascimento (birthday) (Máscara data):
            </span>
            <input
              {...register("birthday")}
              onChange={(e) => handleMask(e, "DATE")}
              onBlur={(e) => handleBlurMask(e, "DATE")}
              className="border border-black"
              id="birthday"
              title="birthday"
              type="birthday"
            />
            {errors.birthday && (
              <p className="bg-red-400">{errors.birthday.message}</p>
            )}{" "}
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
            {errors.genre && (
              <p className="bg-red-400">{errors.genre.message}</p>
            )}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Concordo (agree)</span>
            <input {...register("agree")} title="agree" type="checkbox" />
            {errors.agree && (
              <p className="bg-red-400">{errors.agree.message}</p>
            )}
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
          {errors.theme && <p className="bg-red-400">{errors.theme.message}</p>}

          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Título (title) (Obrigatório)</span>
            <textarea
              id="title"
              title="title"
              className="border border-black"
              {...register("title")}
            />
            {errors.title && (
              <p className="bg-red-400">{errors.title.message}</p>
            )}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Descrição (description) (Opcional)</span>
            <textarea
              id="description"
              title="description"
              className="border border-black"
              {...register("description")}
            />
          </label> */}
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
