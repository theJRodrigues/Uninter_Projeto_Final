import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface AppointmentViewModalProps {
  patientName: string;
  date: string;
  time: string;
  status: string;
  onClose?: () => void;
}

const formSchema = z.object({
  patientName: z.string(),
  date: z.string(),
  time: z.string(),
  status: z.string(),
  notes: z.string().max(300, { message: "Máximo de 300 caracteres." }),
});

type FormData = z.infer<typeof formSchema>;

const AppointmentViewModal = ({ patientName, date, time, status, onClose }: AppointmentViewModalProps) => {
  const inputDefaultStyle = "outline px-1 py-0.5 rounded focus:outline-blue-600";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      patientName,
      date,
      time,
      status,
      notes: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    if (onClose) onClose();
  };

  return (
    <div className="absolute top-0 left-0 z-30 w-full h-dvh backdrop-blur-2xl flex items-center justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded p-6 w-full max-w-80 space-y-2 shadow-xl"
      >
        <label className="flex flex-col gap-0.5">
          Paciente
          <input {...register("patientName")} className={inputDefaultStyle} readOnly />
        </label>

        <fieldset className="flex gap-4 mb-2">
          <label className="flex flex-col gap-1">
            Data
            <input type="date" {...register("date")} className={inputDefaultStyle} readOnly />
          </label>
          <label className="flex flex-col gap-1">
            Hora
            <input type="time" {...register("time")} className={inputDefaultStyle} readOnly />
          </label>
          <label className="flex flex-col gap-1 ml-auto">
            Status
            <select {...register("status")} className={inputDefaultStyle}>
              <option value="Agendado">Agendado</option>
              <option value="Realizado">Realizado</option>
              <option value="Cancelado">Cancelado</option>
            </select>
            {errors.status && <p className="text-xs text-red-500">{errors.status.message}</p>}
          </label>
        </fieldset>

        <label className="flex flex-col gap-0.5">
          Observações
          <textarea {...register("notes")} className={`${inputDefaultStyle} h-20 resize-none`} />
          {errors.notes && <p className="text-xs text-red-500">{errors.notes.message}</p>}
        </label>

        <footer className="flex justify-end gap-2">
          <button
            type="button"
            className="text-sm text-gray-600 hover:text-gray-800 cursor-pointer"
            onClick={onClose}
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="bg-blue-600 text-white px-2 py-1 rounded text-sm hover:bg-blue-700 cursor-pointer"
          >
            Salvar
          </button>
        </footer>
      </form>
    </div>
  );
};

export default AppointmentViewModal;
