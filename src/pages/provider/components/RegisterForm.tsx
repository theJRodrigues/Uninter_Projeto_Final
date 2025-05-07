import { z } from "zod";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";


const formSchemaZod = z.object({
  name : z.string().min(2),
  cnpj: z.number().min(6).max(50),
  cep: z.number().min(6).max(50),
  street: z.string().min(6).max(50),
  number: z.number().min(1).max(50),
  neighborhood: z.string().min(1).max(50),
  city: z.string().min(1).max(50),
  state: z.string().min(1).max(50),
  complement: z.string().min(1).max(50).optional(),
});

type formSchema = z.infer<typeof formSchemaZod>;

const RegisterForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<formSchema>({
    resolver: zodResolver(formSchemaZod),
  });
  const onSubmit = (data: formSchema) => {
    console.log(data);
  };
  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-3 p-6 rounded text-sm bg-white ring-1 ring-black h-full'>
      <h1 className='text-center text-2xl font-bold'>Cadastro</h1>
      {errors ? <p className='text-red-500'>{errors.name?.message}</p> : null}
      <fieldset className='space-y-3 mt-3'>
        <legend className='font-bold'>Dados</legend>
        <Input {...register("name")} label="Nome da instituição" />
        <Input {...register("cnpj")} label="CNPJ" />
      </fieldset>

      <fieldset className='flex flex-col space-y-3'>
        <legend className='font-bold'>Endereço</legend>
        <div className="flex gap-2">
          <Input {...register("cep")} label="CEP" />
          <Input {...register("street")} label="Rua" customLabelStyle="w-[100%]" />
          <Input {...register("number")} label="Número" />
        </div>
        <Input {...register("neighborhood")} label="Bairro" />
        <div className="flex gap-2">
          <Input {...register("city")} label="Cidade" customLabelStyle="w-[100%]"/>
          <Input {...register("state")} label="Estado" />
        </div>
        <Input {...register("complement")} label="Complemento" />
      </fieldset>
      <button type='submit' className='w-[80%] m-auto p-2 rounded text-white cursor-pointer bg-green-600 hover:bg-green-700'>Cadastrar</button>
    </form>
      
    
  );
};

export default RegisterForm;
