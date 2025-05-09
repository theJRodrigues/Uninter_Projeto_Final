import { z } from "zod";

export const patientSchema = z.object({
  name: z
    .string()
    .nonempty("Obrigatório")
    .min(2, { message: "Nome muito curto" })
    .max(100, { message: "Nome muito longo" }),

  cpf: z
    .string()
    .nonempty("Obrigatório")
    .regex(/^\d{11}$/, {
      message: "CPF deve conter 11 dígitos numéricos",
    }),

  email: z.string().nonempty("Obrigatório").email("E-mail inválido"),

  password: z
    .string()
    .nonempty("Senha é obrigatória")
    .min(8, { message: "A senha deve ter no mínimo 8 caracteres" })
    .max(50, { message: "A senha deve ter no máximo 50 caracteres" }),

  phone: z
    .string()
    .nonempty("Obrigatório")
    .regex(/^\d{10,11}$/, {
      message: "Telefone deve conter 10 ou 11 dígitos",
    }),
});
