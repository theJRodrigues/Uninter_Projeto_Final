import { z } from "zod";
import Input from "../Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ResetPasswordModal from "./resetPasswordModal/ResetPasswordModal";
import { useState } from "react";

const loginSchemaZod = z.object({
  email: z.string().nonempty("Obrigatório").email({ message: "E-mail inválido" }),

  password: z.string().nonempty("Obrigatório").min(8, { message: "Mínimo 8 caracteres" }),
});

type LoginSchema = z.infer<typeof loginSchemaZod>;

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchemaZod),
  });
  const [showModal, setShowModal] = useState(false);
  const onCloseModal = () => {
    setShowModal(false);
  };
  const onShowModal = () => {
    setShowModal(true);
  };
  const onSubmit = (data: LoginSchema) => {
    console.log("Login data:", data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col space-y-3 p-4 rounded text-sm bg-white ring-1 ring-black w-full mx-auto relative"
      >
        <h1 className="text-center text-2xl font-bold">Login</h1>

        <Input
          {...register("email")}
          label="E-mail"
          placeholder="seuemail@exemplo.com"
          errorMessage={errors.email?.message}
        />
        <div>
          <Input
            {...register("password")}
            type="password"
            label="Senha"
            placeholder="********"
            errorMessage={errors.password?.message}
          />
          <button type="button" className="text-xs underline cursor-pointer" onClick={onShowModal}>
            Esqueceu a senha?
          </button>
        </div>

        <button
          type="submit"
          className="w-full mt-2 px-2 py-1 rounded text-white cursor-pointer bg-blue-600 hover:bg-blue-700"
        >
          Entrar
        </button>
      </form>
      {showModal && <ResetPasswordModal closeModal={onCloseModal} />}
    </>
  );
};

export default LoginForm;
