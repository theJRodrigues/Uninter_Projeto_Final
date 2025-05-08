import { z } from "zod";

export const patientSchema = z.object({
  name: z.string()
    .nonempty("Obrigatório")
    .min(2, { message: "Nome muito curto" })
    .max(100, { message: "Nome muito longo" }),

  cpf: z.string()
    .nonempty("Obrigatório")
    .regex(/^\d{11}$/, {
      message: "CPF deve conter 11 dígitos numéricos",
    }),

  birthDate: z.string()
    .nonempty("Obrigatória"),

  email: z.string()
    .nonempty("Obrigatório")
    .email("E-mail inválido"),

  phone: z.string()
    .nonempty("Obrigatório")
    .regex(/^\d{10,11}$/, {
      message: "Telefone deve conter 10 ou 11 dígitos",
    }),

  cep: z.string()
    .nonempty("Obrigatório")
    .regex(/^\d{8}$/, {
      message: "CEP deve conter 8 dígitos",
    }),

  street: z.string()
    .nonempty("Obrigatória")
    .min(3, { message: "Rua muito curta" })
    .max(100, { message: "Rua muito longa" }),

  number: z.string()
    .nonempty("Obrigatório")
    .regex(/^\d+$/, {
      message: "Número deve conter apenas dígitos",
    }),

  neighborhood: z.string()
    .nonempty("Obrigatório")
    .min(2, { message: "Bairro muito curto" })
    .max(50, { message: "Bairro muito longo" }),

  city: z.string()
    .nonempty("Obrigatória")
    .min(2, { message: "Cidade muito curta" })
    .max(50, { message: "Cidade muito longa" }),

  state: z.string()
    .nonempty("Obrigatório")
    .min(2, { message: "Use a sigla do estado" })
    .max(2, { message: "Use apenas 2 letras" }),

  complement: z.string()
    .max(100, { message: "Complemento muito longo" })
    .optional(),
});