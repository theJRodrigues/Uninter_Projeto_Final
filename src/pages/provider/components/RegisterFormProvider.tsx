import { z } from "zod";
import Input from "../../../components/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchemaZod = z.object({
  name: z.string()
    .nonempty("Obrigatório")
    .min(2, { message: "Nome muito curto" })
    .max(100, { message: "Nome muito longo" }),

  cnpj: z.string()
    .nonempty("Obrigatório")
    .regex(/^\d{14}$/, {
      message: "CNPJ deve conter 14 dígitos numéricos",
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



type formSchema = z.infer<typeof formSchemaZod>;

const RegisterFormProvider = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<formSchema>({
    resolver: zodResolver(formSchemaZod),
  });
  const onSubmit = (data: formSchema) => {
    console.log(data);
  };
  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-1 p-3 rounded text-sm bg-white ring-1 ring-black h-full'>
      <h1 className='text-center text-2xl font-bold'>Cadastro</h1>
      <fieldset className='space-y-1 '>
        <legend className='font-bold'>Dados</legend>
          <Input {...register("name")} label="Nome da instituição" errorMessage={errors.name?.message} />
          <Input {...register("cnpj")} placeholder="00.000.000/0000-00" maxLength={14} label="CNPJ" errorMessage={errors.cnpj?.message} />
      </fieldset>

      <fieldset className='flex flex-col space-y-1'>
        <legend className='font-bold'>Endereço</legend>
        <div className="flex gap-2">
          <Input {...register("cep")} label="CEP" maxLength={8} placeholder="00000-000" errorMessage={errors.cep?.message}/>
          <Input {...register("street")} label="Rua" customLabelStyle="w-[100%]" errorMessage={ errors.street?.message} />
            <Input {...register("number")} label="Número"  errorMessage={errors.number?.message}/>
        </div>
          <Input {...register("neighborhood")} label="Bairro"  errorMessage={errors.neighborhood?.message}/>
        <div className="flex gap-2">
          <Input {...register("city")} label="Cidade" customLabelStyle="w-[100%]" errorMessage={errors.city?.message}/>
          <Input {...register("state")} label="Estado"  placeholder="ex. SP" maxLength={2} errorMessage={errors.state?.message}/>
        </div>
        <Input {...register("complement")} label="Complemento" errorMessage={errors.complement?.message} />
      </fieldset>
      <button type='submit' className='w-[100%] mt-2 m-auto px-2 py-1 rounded text-white cursor-pointer bg-green-600 hover:bg-green-700'>Cadastrar</button>
    </form>
      
    
  );
};

export default RegisterFormProvider;
