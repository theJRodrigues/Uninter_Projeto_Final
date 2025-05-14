import { useState } from "react";
import AppointmentQueryFilter from "./components/AppointmentQueryFilter";
import AppointmentsTable from "./components/AppointmentsTable";
import ProviderAsideMenu from "../components/ProviderAsideMenu";
import AppointmentPeriodFilter from "./components/AppointmentPeriodFilter";

export type periods = "Hoje" | "Semana" | "Mês" | "Todos";

const ProviderAppointments = () => {
  const [queryFilter, setQueryFilter] = useState("");
  const [periodFilter, setPeriodFilter] = useState<periods>("Todos");

  const handleFilterChange = (newFilters: string) => {
    setQueryFilter(newFilters);
  };

  const handlePeriodChange = (newPeriod: periods) => {
    console.log(periodFilter);
    setPeriodFilter(newPeriod);
  };

  return (
    <div className="flex min-h-dvh">
      <ProviderAsideMenu />
      <main className="p-6 w-full">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Atendimentos</h1>
          <p className="text-gray-500 text-sm">Histórico e Gestão</p>
        </header>
        <section className="flex justify-between mb-2">
          <AppointmentPeriodFilter period={periodFilter} onChange={handlePeriodChange} />
          <AppointmentQueryFilter queryFilter={queryFilter} onChange={handleFilterChange} />
        </section>
        <AppointmentsTable filters={queryFilter} />
      </main>
    </div>
  );
};

export default ProviderAppointments;
