import type { periods } from "../ProviderAppointments";

// AppointmentsTable.tsx
interface AppointmentsTableProps {
  queryFilter: string;
  periodFilter: periods;
}

const AppointmentsTable = ({ queryFilter, periodFilter }: AppointmentsTableProps) => {
  //TODO create
  const data = [
    { id: 1, patient: "João Silva", date: "2025-05-13", time: "14:00", status: "Realizado" },
    { id: 2, patient: "Maria Souza", date: "2025-05-14", time: "09:30", status: "Agendado" },
  ];

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
          {data.map((row) => (
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
