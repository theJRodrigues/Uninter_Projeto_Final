import { z } from "zod";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchemaZod = z.object({
  email: z.string()
    .nonempty("Obrigatório")
    .email({ message: "E-mail inválido" }),

  password: z.string()
    .nonempty("Obrigatório")
    .min(8, { message: "Mínimo 6 caracteres" }),
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

  const onSubmit = (data: LoginSchema) => {
    console.log("Login data:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col space-y-3 p-4 rounded text-sm bg-white ring-1 ring-black w-full mx-auto"
    >
      <h1 className="text-center text-2xl font-bold">Login</h1>

      <Input
        {...register("email")}
        label="E-mail"
        placeholder="seuemail@exemplo.com"
        errorMessage={errors.email?.message}
      />

      <Input
        {...register("password")}
        type="password"
        label="Senha"
        placeholder="********"
        errorMessage={errors.password?.message}
      />

      <button
        type="submit"
        className="w-full mt-2 px-2 py-1 rounded text-white cursor-pointer bg-blue-600 hover:bg-blue-700"
      >
        Entrar
      </button>
    </form>
  );
};

export default LoginForm;