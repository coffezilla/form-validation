import { z } from "zod";
import { maskFixToMoney } from "../helpers/masks/currency";
import { maskFixToPercentage, maskToRawNumber } from "../helpers/masks/numbers";
import { maskFixToDate } from "../helpers/masks/time";

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
  salary: z
    .string()
    .min(1, "Salary should be longer than 1 character")
    .transform((value) => maskFixToMoney(value, "", "commam", "dot")),
  // percentage
  raise: z
    .string()
    .min(1, "Raise should be longer than 1 character")
    .transform((value) => maskFixToPercentage(value, 3, false, "", "", true)),
  // cep
  cep: z
    .string()
    .min(1, "CEP should be longer than 1 character")
    .transform((value) => maskToRawNumber(value)),
  // phone
  phone: z
    .string()
    .min(1, "Phone should be longer than 1 character")
    .transform((value) => maskToRawNumber(value)),
  // cpf
  cpf: z
    .string()
    .min(1, "Name should be longer than 1 character")
    .transform((value) => maskToRawNumber(value)),
  // int
  workdays: z
    .string()
    .min(1, "Work Days should be longer than 1 character")
    .transform((value) => maskToRawNumber(value)),
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
    .max(10, "should be valid date")
    .transform((value) => maskFixToDate(value, "", "DD/MM/YYYY", "YYYY-MM-DD")),
  // number
  age: z
    .string()
    .min(1, "Age should be longer than 1 character")
    .transform((value) => maskToRawNumber(value)),
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
