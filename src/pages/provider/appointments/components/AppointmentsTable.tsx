import type { periods } from "../ProviderAppointments";
import { compareAsc, isSameDay, isSameMonth, isSameWeek, parseISO } from "date-fns";

interface AppointmentsTableProps {
  queryFilter: string;
  periodFilter: periods;
}

const AppointmentsTable = ({ queryFilter, periodFilter }: AppointmentsTableProps) => {
  const data = [
    { id: 5, patient: "Fernanda Costa", date: "2025-05-19", time: "08:30", status: "Realizado" },
    { id: 10, patient: "Lucas Almeida", date: "2025-05-14", time: "21:00", status: "Agendado" },
    { id: 13, patient: "Camila Barros", date: "2025-06-03", time: "14:30", status: "Cancelado" },
    { id: 16, patient: "Sérgio Oliveira", date: "2025-06-10", time: "09:45", status: "Agendado" },
    { id: 17, patient: "Aline Castro", date: "2025-05-29", time: "12:30", status: "Realizado" },
    { id: 19, patient: "Vanessa Moura", date: "2025-05-22", time: "10:45", status: "Agendado" },
    { id: 20, patient: "Gabriel Fernandes", date: "2025-06-05", time: "16:10", status: "Realizado" },
  ];

  const filteredDatas = data.filter((appointment) => {
    const date = parseISO(appointment.date);
    const today = new Date();
    const periodMatch =
      periodFilter === "Todos" ||
      (periodFilter === "Hoje" && isSameDay(date, today)) ||
      (periodFilter === "Semana" && isSameWeek(date, today, { weekStartsOn: 1 })) ||
      (periodFilter === "Mês" && isSameMonth(date, today));

    const dateFromToday = date >= today;
    const filterMatch = appointment.patient.toLowerCase().includes(queryFilter.toLowerCase());

    return periodMatch && filterMatch && dateFromToday;
  });

  const sortedDatas = filteredDatas.sort((a, b) => {
    const firstDate = parseISO(`${a.date}T${a.time}`);
    const secondDate = parseISO(`${b.date}T${b.time}`);

    return compareAsc(firstDate, secondDate);
  });

  return (
    <div>
      <table className="min-w-full bg-white border border-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="text-left px-1 py-2 border-b">Paciente</th>
            <th className="text-left px-1 py-2 border-b">Data</th>
            <th className="text-left px-1 py-2 border-b">Hora</th>
            <th className="text-left px-1 py-2 border-b">Status</th>
            <th className="text-left px-1 py-2 border-b">Ações</th>
          </tr>
        </thead>
        <tbody>
          {sortedDatas.map((row) => (
            <tr key={row.id} className="border border-gray-500">
              <td className="px-1 py-1">{row.patient}</td>
              <td className="px-1 py-1">{row.date}</td>
              <td className="px-1 py-1">{row.time}</td>
              <td className="px-1 py-1">
                <span
                  className={`text-sm font-medium px-1 py-1 rounded-full ${
                    row.status === "Realizado"
                      ? "bg-green-100 text-green-700"
                      : row.status === "Agendado"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-red-100 text-red-700"
                  }`}
                >
                  {row.status}
                </span>
              </td>
              <td className="px-1 py-1 space-x-2">
                <button className="text-sm text-blue-600 hover:underline cursor-pointer">Ver</button>
                <button className="text-sm text-gray-600 hover:underline cursor-pointer">Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
