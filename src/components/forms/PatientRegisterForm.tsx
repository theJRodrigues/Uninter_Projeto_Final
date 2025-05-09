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
        <legend className='font-bold'>Informações</legend>
        <Input {...register("name")} label="Nome completo" customLabelStyle="w-full" errorMessage={errors.name?.message} />
        <div className="flex gap-2">
          <Input {...register("cpf")} label="CPF" maxLength={11} placeholder="Somente números" customLabelStyle="w-full" errorMessage={errors.cpf?.message} />
          <Input {...register("phone")} label="Telefone" maxLength={11} placeholder="DDD + número" customLabelStyle="w-full" errorMessage={errors.phone?.message} />
        </div>
        <Input {...register("email")} label="E-mail" type="email" customLabelStyle="w-full" errorMessage={errors.email?.message} />
        <Input {...register("password")} label="Senha" type="password" customLabelStyle="w-full" errorMessage={errors.password?.message} />
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