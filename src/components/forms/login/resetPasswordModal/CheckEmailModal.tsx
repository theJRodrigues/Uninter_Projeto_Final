import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../Input";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

const emailSchema = z.object({
  email: z.string().nonempty("Obrigatório").email("E-mail inválido"),
});

type emailForm = z.infer<typeof emailSchema>;

interface CheckEmailFormProps {
  onClose: () => void;
  nextStep: () => void;
}

const CheckEmailForm = ({ onClose, nextStep }: CheckEmailFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<emailForm>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = (data: emailForm) => {
    console.log("Codigo enviado");
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-50 bg-white p-4 rounded shadow-2xl shadow-gray-700"
    >
      <header>
        <p>Insira o seu e-mail para enviar o código de confirmação!</p>
      </header>
      <Input
        {...register("email")}
        label="E-mail"
        placeholder="seuemail@exemplo.com"
        errorMessage={errors.email?.message}
      />
      <footer className="flex justify-between">
        <button
          onClick={onClose}
          type="button"
          className="text-sm text-white bg-red-600 hover:bg-red-700 cursor-pointer px-2 rounded"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm cursor-pointer"
        >
          Enviar código
        </button>
      </footer>
    </form>
  );
};

export default CheckEmailForm;
