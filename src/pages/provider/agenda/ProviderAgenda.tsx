import { useState } from "react";
import AgendaFilters from "./components/AgendaFilters";
import AgendaList from "./components/AgendaList";
import ProviderAsideMenu from "../components/ProviderAsideMenu";

const ProviderAgenda = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");

  return (
    <div className="flex min-h-dvh">
      <ProviderAsideMenu />
      <main className="p-6 w-full">
        <header className="mb-6 text-center">
          <h1 className="text-3xl font-bold text-gray-800">Agenda</h1>
          <p className="text-gray-500 text-sm">Visualize e gerencie seus atendimentos agendados</p>
        </header>

        <AgendaFilters
          selectedDate={selectedDate}
          statusFilter={statusFilter}
          onDateChange={setSelectedDate}
          onStatusChange={setStatusFilter}
        />

        <AgendaList selectedDate={selectedDate} statusFilter={statusFilter} />
      </main>
    </div>
  );
};

export default ProviderAgenda;
