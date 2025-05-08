// PatientRegisterForm.tsx
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Input from "./Input";
import { patientSchema } from "../../constants/PatientSchema";



type formSchema = z.infer<typeof patientSchema>;

const PatientRegisterForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<formSchema>({
    resolver: zodResolver(patientSchema),
  });

  const onSubmit = (data: formSchema) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='flex flex-col space-y-1 p-3 rounded text-sm bg-white ring-1 ring-black h-full'>
      <h1 className='text-center text-2xl font-bold'>Cadastro de Paciente</h1>

      <fieldset className='space-y-1'>
        <legend className='font-bold'>Dados Pessoais</legend>
        <div className="flex gap-2">
          <Input {...register("name" )} label="Nome completo" customLabelStyle="w-[80%]" errorMessage={errors.name?.message} />
          <Input {...register("cpf" )} label="CPF" maxLength={11} placeholder="Somente números" errorMessage={errors.cpf?.message} />
        </div>
        <div className="flex gap-2">
         <Input {...register("phone" )} label="Telefone" maxLength={11} customLabelStyle="w-full" placeholder="DDD + número" errorMessage={errors.phone?.message} />
         <Input {...register("birthDate" )} label="Data de nascimento" customLabelStyle="w-full" type="date" errorMessage={errors.birthDate?.message} /> 
        </div>
         <Input {...register("email" )} label="E-mail" customLabelStyle="w-full" errorMessage={errors.email?.message} />
      </fieldset>

      <fieldset className='space-y-1'>
        <legend className='font-bold'>Endereço</legend>
        <div className="flex gap-2">
          <Input {...register("cep")} label="CEP" maxLength={8} placeholder="00000000" errorMessage={errors.cep?.message} />
          <Input {...register("street")} label="Rua" customLabelStyle="w-[100%]" errorMessage={errors.street?.message} />
          <Input {...register("number")} label="Número" errorMessage={errors.number?.message} />
        </div>
        <Input {...register("neighborhood")} label="Bairro" errorMessage={errors.neighborhood?.message} />
        <div className="flex gap-2">
          <Input {...register("city")} label="Cidade" customLabelStyle="w-[100%]" errorMessage={errors.city?.message} />
          <Input {...register("state")} label="Estado" placeholder="ex. SP" maxLength={2} errorMessage={errors.state?.message} />
        </div>
        <Input {...register("complement")} label="Complemento" errorMessage={errors.complement?.message} />
      </fieldset>

      <button
        type='submit'
        className='w-full mt-2 m-auto px-2 py-1 rounded text-white cursor-pointer bg-green-600 hover:bg-green-700'>
        Cadastrar
      </button>
    </form>
  );
};

export default PatientRegisterForm;
