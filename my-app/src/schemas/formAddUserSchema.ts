import { SubmitHandler } from "react-hook-form";
import { z } from "zod";

// schema
export const formSchema = z.object({
  // input
  name: z.string().min(1, "Name should be longer than 1 character"),
  // email
  email: z
    .string()
    .trim()
    .email("Invalid email address")
    .min(1, "email should be longer than 1 character"),
  // money
  salary: z.string().min(1, "Salary should be longer than 1 character"),
  // percentage
  raise: z.string().min(1, "Raise should be longer than 1 character"),
  // cep
  cep: z.string().min(1, "CEP should be longer than 1 character"),
  // phone
  phone: z.string().min(1, "Phone should be longer than 1 character"),
  // cpf
  cpf: z.string().min(1, "Name should be longer than 1 character"),
  // int
  workdays: z.string().min(1, "Work Days should be longer than 1 character"),
  // password and confirm
  password: z
    .string()
    .trim()
    .min(1, "Password should be longer than 1 character"),
  repassword: z
    .string()
    .trim()
    .min(1, "Repassword should be longer than 1 character"),
  // date
  birthday: z
    .string()
    .trim()
    .min(10, "Birthday should be longer than 1 character")
    .max(10, "should be valid date"),
  // number
  age: z.string().min(1, "Age should be longer than 1 character"),
  // checkbox
  agree: z
    .boolean()
    .refine((value) => value === true, { message: "You must accept the term" }),
  // select
  genre: z.string().min(1, "Need choose some").nonempty("Select an option"),
  // radio
  theme: z.enum(["light", "dark"]),
  // textarea
  title: z.string().min(5, "Minimum 5 characters"),
  // textarea optional
  description: z.string().optional(),
});

// type
export type TFormValues = z.infer<typeof formSchema>;

// check if is equal
export const checkIfIsEqualTo = (samplea: string, sampleb: string) => {
  return samplea === sampleb;
};

// submit
export const onSubmitAddUser: SubmitHandler<TFormValues> = (data) => {
  // check password is equal
  console.log("data submitted", data);
};
