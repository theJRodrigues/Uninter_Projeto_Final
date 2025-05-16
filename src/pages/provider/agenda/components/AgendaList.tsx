import { parseISO, isSameDay, format } from "date-fns";
import { useState } from "react";
import { createPortal } from "react-dom";
import AppointmentViewModal from "../../appointments/components/AppointmentViewModal";

interface Appointment {
  id: number;
  patient: string;
  date: string;
  time: string;
  status: "Agendado" | "Cancelado";
}

interface AgendaListProps {
  selectedDate: string;
  statusFilter: string;
}

const mockData: Appointment[] = [
  { id: 1, patient: "João Silva", date: "2025-05-20", time: "08:00", status: "Agendado" },
  { id: 2, patient: "Maria Souza", date: "2025-05-20", time: "09:30", status: "Agendado" },
  { id: 3, patient: "Camila Barros", date: "2025-05-21", time: "11:00", status: "Cancelado" },
];

const AgendaList = ({ selectedDate, statusFilter }: AgendaListProps) => {
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

  const filtered = mockData.filter((item) => {
    const matchDate = selectedDate ? isSameDay(parseISO(item.date), parseISO(selectedDate)) : true;
    const matchStatus = statusFilter === "Todos" || item.status === statusFilter;
    return matchDate && matchStatus;
  });

  if (filtered.length === 0) {
    return (
      <p className="text-sm text-gray-500">Nenhum agendamento encontrado para os filtros selecionados.</p>
    );
  }

  return (
    <>
      <ul className="space-y-2">
        {filtered.map((appt) => (
          <li key={appt.id} className="flex justify-between items-center border p-3 rounded shadow-sm">
            <section>
              <p className="font-medium text-gray-800">{appt.patient}</p>
              <p className="text-sm text-gray-600">
                {format(parseISO(appt.date), "dd/MM/yyyy")} — {appt.time} —
                <span
                  className={`ml-1 text-sm font-medium px-2 py-0.5 rounded-full ${
                    appt.status === "Agendado" ? "bg-blue-100 text-blue-700" : "bg-red-100 text-red-700"
                  }`}
                >
                  {appt.status}
                </span>
              </p>
            </section>
            <section className="space-x-2">
              <button
                className="text-sm text-blue-600 hover:underline cursor-pointer"
                onClick={() => setSelectedAppointment(appt)}
              >
                Ver
              </button>
              <button className="text-sm text-red-500 hover:underline cursor-pointer">Cancelar</button>
            </section>
          </li>
        ))}
      </ul>

      {selectedAppointment &&
        createPortal(
          <AppointmentViewModal
            date={selectedAppointment.date}
            time={selectedAppointment.time}
            patientName={selectedAppointment.patient}
            status={selectedAppointment.status}
            onClose={() => setSelectedAppointment(null)}
          />,
          document.body,
        )}
    </>
  );
};

export default AgendaList;
