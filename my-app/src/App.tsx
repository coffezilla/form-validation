import { zodResolver } from "@hookform/resolvers/zod";

import { SubmitHandler, useForm } from "react-hook-form";
import {
  formSchema,
  onSubmitAddUser,
  TFormValues,
} from "./schemas/formAddUserSchema";

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
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Salário (salary) (máscara dinheiro)</span>
            <input
              {...register("salary")}
              className="border border-black"
              id="salary"
              title="salary"
              type="salary"
            />
            {errors.salary && <p>{errors.salary.message}</p>}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Aumento (raise) (máscara porcentagem)</span>
            <input
              {...register("raise")}
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
              className="border border-black"
              id="cep"
              title="cep"
              type="cep"
            />
            {errors.cep && <p>{errors.cep.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">CPF (cpf) (máscara cpf)</span>
            <input
              {...register("cpf")}
              className="border border-black"
              id="cpf"
              title="cpf"
              type="cpf"
            />
            {errors.cpf && <p>{errors.cpf.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Dias trabalhados (workdays)</span>
            <input className="border border-black" id="workdays" type="text" />
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
              className="border border-black"
              id="age"
              title="age"
              type="age"
            />
            {errors.age && <p>{errors.age.message}</p>}{" "}
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">
              Data de nascimento (birthday) (Máscara data):
            </span>
            <input
              {...register("birthday")}
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
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Concordo (agree)</span>
            <input {...register("agree")} title="agree" type="checkbox" />
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

          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Título (title) (Obrigatório)</span>
            <textarea
              id="title"
              title="title"
              className="border border-black"
              {...register("title")}
            />
          </label>
          <label className="block border border-black py-2 px-2 bg-gray-100">
            <span className="block">Descrição (description) (Opcional)</span>
            <textarea
              id="description"
              title="description"
              className="border border-black"
              {...register("description")}
            />
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
