import Input from "../../../Input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";

interface ResetPasswordFromProps {
  onClose: () => void;
  nextStep: () => void;
}

const passwordSchema = z
  .object({
    password: z.string().nonempty("Obrigatório").min(8, "Mínimo 8 caracteres"),
    confirmPassword: z.string().nonempty("Obrigatório"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
  });

type formSchema = z.infer<typeof passwordSchema>;

const ResetPasswordForm = ({ onClose, nextStep }: ResetPasswordFromProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = () => {
    nextStep();
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-50 bg-white p-4 rounded shadow-2xl shadow-gray-700"
    >
      <header>
        <h1>Insira a nova senha!</h1>
      </header>
      <Input
        {...register("password")}
        type="password"
        label="Nova senha"
        placeholder="********"
        errorMessage={errors.password?.message}
      />
      <Input
        {...register("confirmPassword")}
        type="password"
        label="Confirmar senha"
        placeholder="********"
        errorMessage={errors.confirmPassword?.message}
      />
      <div className="flex justify-between">
        <button
          onClick={onClose}
          type="button"
          className="text-sm text-gray-600 hover:text-gray-900 cursor-pointer"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="bg-green-600 hover:bg-green-700 text-white px-2 py-1 rounded text-sm cursor-pointer"
        >
          Redefinir senha
        </button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
