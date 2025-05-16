import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import ProviderAsideMenu from "../components/ProviderAsideMenu";

const institutionSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  cnpj: z.string().min(14, "CNPJ inválido"),
  email: z.string().email("Email inválido"),
  phone: z.string().min(10, "Telefone inválido"),
});

type InstitutionFormData = z.infer<typeof institutionSchema>;

const defaultValues: InstitutionFormData = {
  name: "Hospital Vida",
  cnpj: "12345678000199",
  email: "contato@hospitalvida.com",
  phone: "11999998888",
};

const ProviderInstitution = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InstitutionFormData>({
    resolver: zodResolver(institutionSchema),
    defaultValues,
  });

  const onSubmit = (data: InstitutionFormData) => {
    console.log("Instituição atualizada:", data);
  };

  return (
    <div className="flex min-h-dvh">
      <ProviderAsideMenu />
      <main className="p-6 w-full mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Minha Instituição</h1>
          <p className="text-sm text-gray-500">Gerencie os dados da sua instituição de saúde</p>
        </header>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 bg-white p-6 max-w-60 m-auto rounded shadow"
        >
          <label className="flex flex-col text-sm">
            Nome:
            <input {...register("name")} className="border border-gray-300 rounded px-2 py-1" />
            {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
          </label>

          <label className="flex flex-col text-sm">
            CNPJ:
            <input {...register("cnpj")} className="border border-gray-300 rounded px-2 py-1" />
            {errors.cnpj && <span className="text-xs text-red-500">{errors.cnpj.message}</span>}
          </label>

          <label className="flex flex-col text-sm">
            Email:
            <input {...register("email")} className="border border-gray-300 rounded px-2 py-1" />
            {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
          </label>

          <label className="flex flex-col text-sm">
            Telefone:
            <input {...register("phone")} className="border border-gray-300 rounded px-2 py-1" />
            {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
          </label>

          <footer className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
            >
              Salvar
            </button>
          </footer>
        </form>
      </main>
    </div>
  );
};

export default ProviderInstitution;
