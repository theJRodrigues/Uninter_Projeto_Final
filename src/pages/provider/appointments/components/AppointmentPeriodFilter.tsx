import type { periods } from "../ProviderAppointments";

interface AppointmentPeriodFilterProps {
  period: periods;
  onChange: (newPeriod: periods) => void;
}
const AppointmentPeriodFilter = ({ period, onChange }: AppointmentPeriodFilterProps) => {
  return (
    <select
      value={period}
      className="border border-gray-300 rounded px-1 py-0.5"
      onChange={(e) => onChange(e.target.value as periods)}
    >
      <option value="Hoje">Hoje</option>
      <option value="Semana">Esta semana</option>
      <option value="Mês">Este mês</option>
      <option value="Todos">Todos</option>
    </select>
  );
};

export default AppointmentPeriodFilter;
