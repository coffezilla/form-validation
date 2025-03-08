import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(1, "Name should be longer than 1 character"),
});

type TFormValues = z.infer<typeof formSchema>;

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

  const onSubmit: SubmitHandler<TFormValues> = (data) => {
    console.log("data submitted", data);
  };

  return (
    <>
      <div className="grid grid-cols-2 gap-5">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label
            className="block border border-black py-2 px-2 bg-gray-100"
            htmlFor="name"
          >
            <span>Nome (name)</span>
            <input className="border border-black" id="name" type="text" />
          </label>
          <label
            className="block border border-black py-2 px-2 bg-gray-100"
            htmlFor="email"
          >
            <span>E-mail (email)</span>
            <input className="border border-black" id="email" type="text" />
          </label>
          <label
            className="block border border-black py-2 px-2 bg-gray-100"
            htmlFor="password"
          >
            <span>Senha (password)</span>
            <input className="border border-black" id="password" type="text" />
          </label>
          <label
            className="block border border-black py-2 px-2 bg-gray-100"
            htmlFor="repassword"
          >
            <span>Confirmar senha (repassword)</span>
            <input
              className="border border-black"
              id="repassword"
              type="text"
            />
          </label>
          <label
            className="block border border-black py-2 px-2 bg-gray-100"
            htmlFor="age"
          >
            <span>Idade (age) Só número:</span>
            <input className="border border-black" id="age" type="text" />
          </label>
          <label
            className="block border border-black py-2 px-2 bg-gray-100"
            htmlFor="genre"
          >
            <select name="genre" id="genre" className="border border-black">
              <option value="">-- Choose --</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </label>
          <label
            className="block border border-black py-2 px-2 bg-gray-100"
            htmlFor="agree"
          >
            <span>Concordo (agree)</span>
            <input type="checkbox" />
          </label>
          <label
            className="block border border-black py-2 px-2 bg-gray-100"
            htmlFor="theme"
          >
            <input type="radio" name="theme" />
            <span>Preferência Dark (theme)</span>
            <input type="radio" name="theme" />
            <span>Preferência Light (theme)</span>
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
