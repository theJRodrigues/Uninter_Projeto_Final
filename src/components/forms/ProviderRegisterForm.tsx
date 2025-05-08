import { z } from "zod";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { providerSchema } from "../../constants/ProviderSchema";

type formSchema = z.infer<typeof providerSchema>;

const ProviderRegisterForm = () => {
  const { register, handleSubmit, formState: {errors} } = useForm<formSchema>({
    resolver: zodResolver(providerSchema),
  });
  const onSubmit = (data: formSchema) => {
    console.log(data);
  };
  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-1 p-3 rounded text-sm bg-white ring-1 ring-black h-full'>
      <h1 className='text-center text-2xl font-bold'>Cadastro de Prestador</h1>
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

export default ProviderRegisterForm;
