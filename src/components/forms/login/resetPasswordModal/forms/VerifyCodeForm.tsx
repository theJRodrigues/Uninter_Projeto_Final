import { zodResolver } from "@hookform/resolvers/zod/src/zod.js";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Input from "../../../Input";
interface VerifyCodeModalProps {
  onClose: () => void;
  nextStep: () => void;
}

const codeSchema = z.object({
  code: z
    .string()
    .nonempty("Obrigatório")
    .length(6, "Código deve ter 6 dígitos")
    .regex(/^\d+$/, "Digite apenas números"),
});

type formSchema = z.infer<typeof codeSchema>;

const VerifyCodeModal = ({ onClose, nextStep }: VerifyCodeModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<formSchema>({
    resolver: zodResolver(codeSchema),
  });

  const onSubmit = () => {
    nextStep();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-50 bg-white p-4 rounded shadow-2xl shadow-gray-700 "
    >
      <header>
        <h1>Insira o código de verificação encaminhado para o seu e-mail</h1>
      </header>
      <Input
        {...register("code")}
        label="Código de verificação"
        placeholder="6 dígitos"
        maxLength={6}
        errorMessage={errors.code?.message}
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
          className="bg-blue-600 hover:bg-blue-700 text-white px-2 py-1 rounded text-sm cursor-pointer"
        >
          Verificar
        </button>
      </div>
    </form>
  );
};

export default VerifyCodeModal;
