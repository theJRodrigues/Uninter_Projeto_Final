import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import type { Patient } from "./ProviderPatientList";

const patientSchema = z.object({
  name: z.string().min(2, "Nome muito curto"),
  birthdate: z.string().nonempty("Data obrigatória"),
  document: z.string().min(11, "CPF inválido"),
  phone: z.string().min(10, "Telefone inválido"),
});

type PatientFormData = z.infer<typeof patientSchema>;

interface PatientEditModalProps {
  patient: Patient;
  onClose: () => void;
}

const PatientEditModal = ({ patient, onClose }: PatientEditModalProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PatientFormData>({
    resolver: zodResolver(patientSchema),
    defaultValues: patient,
  });

  console.log(patient);
  const onSubmit = (data: PatientFormData) => {
    console.log(data);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded p-6 w-full max-w-md shadow-xl space-y-4"
      >
        <header className="flex justify-between items-center mb-2">
          <h2 className="text-lg font-bold">Editar Paciente</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-800 cursor-pointer"
          >
            <X size={20} />
          </button>
        </header>

        <label className="flex flex-col text-sm">
          Nome:
          <input {...register("name")} className="border border-gray-300 rounded px-2 py-1" />
          {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
        </label>

        <label className="flex flex-col text-sm">
          Nascimento:
          <input
            type="date"
            {...register("birthdate")}
            className="border border-gray-300 rounded px-2 py-1"
          />
          {errors.birthdate && <span className="text-xs text-red-500">{errors.birthdate.message}</span>}
        </label>

        <label className="flex flex-col text-sm">
          CPF:
          <input {...register("document")} className="border border-gray-300 rounded px-2 py-1" />
          {errors.document && <span className="text-xs text-red-500">{errors.document.message}</span>}
        </label>

        <label className="flex flex-col text-sm">
          Telefone:
          <input {...register("phone")} className="border border-gray-300 rounded px-2 py-1" />
          {errors.phone && <span className="text-xs text-red-500">{errors.phone.message}</span>}
        </label>

        <footer className="flex justify-end gap-2">
          <button
            type="button"
            onClick={onClose}
            className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="text-sm bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded cursor-pointer"
          >
            Salvar
          </button>
        </footer>
      </form>
    </div>
  );
};

export default PatientEditModal;
