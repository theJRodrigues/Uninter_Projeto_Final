interface AgendaFiltersProps {
  selectedDate: string;
  statusFilter: string;
  onDateChange: (date: string) => void;
  onStatusChange: (status: string) => void;
}

const AgendaFilters = ({ selectedDate, statusFilter, onDateChange, onStatusChange }: AgendaFiltersProps) => {
  return (
    <section className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
      <label className="flex flex-col text-sm">
        Data:
        <input
          type="date"
          value={selectedDate}
          onChange={(e) => onDateChange(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        />
      </label>

      <label className="flex flex-col text-sm">
        Status:
        <select
          value={statusFilter}
          onChange={(e) => onStatusChange(e.target.value)}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="Todos">Todos</option>
          <option value="Agendado">Agendado</option>
          <option value="Cancelado">Cancelado</option>
        </select>
      </label>
    </section>
  );
};

export default AgendaFilters;
