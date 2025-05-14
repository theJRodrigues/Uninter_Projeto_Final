import { Search } from "lucide-react";

interface AppointmentQueryFilterProps {
  queryFilter: string;
  onChange: (newPeriod: string) => void;
}

const AppointmentQueryFilter = ({ queryFilter, onChange }: AppointmentQueryFilterProps) => {
  return (
    <label className="relative flex items-center md:w-50 w-full border border-gray-300 rounded">
      <input
        type="text"
        value={queryFilter}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Buscar por nome do paciente"
        className="px-1 py-0.5 w-full outline-blue-600"
      />
      <Search className="absolute right-1 bg-white cursor-pointer" />
    </label>
  );
};

export default AppointmentQueryFilter;
