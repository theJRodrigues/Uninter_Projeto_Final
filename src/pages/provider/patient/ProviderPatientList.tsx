import { useState } from "react";
import PatientList from "./PatientList";
import ProviderAsideMenu from "../components/ProviderAsideMenu";

export interface Patient {
  id: number;
  name: string;
  birthdate: string;
  document: string;
  phone: string;
}

const mockPatients: Patient[] = [
  {
    id: 1,
    name: "João Silva",
    birthdate: "1990-04-12",
    document: "123.456.789-00",
    phone: "(11) 99999-1234",
  },
  {
    id: 2,
    name: "Maria Souza",
    birthdate: "1985-08-30",
    document: "987.654.321-00",
    phone: "(21) 98888-5678",
  },
  {
    id: 3,
    name: "Carlos Lima",
    birthdate: "1978-01-25",
    document: "555.333.222-11",
    phone: "(31) 97777-4444",
  },
];

const ProviderPatientList = () => {
  const [query, setQuery] = useState("");

  const filtered = mockPatients.filter(
    (p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.document.includes(query),
  );

  return (
    <div className="flex min-h-dvh">
      <ProviderAsideMenu />
      <main className="p-6 max-w-4xl mx-auto">
        <header className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Pacientes</h1>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar por nome ou CPF..."
            className="mt-2 border border-gray-300 px-3 py-1 rounded w-full"
          />
        </header>

        <section className="grid grid-cols-5 justify-center px-3 py-1 rounded bg-blue-600 text-white font-medium border mb-2">
          <span>Nome</span>
          <span>CPF</span>
          <span>Nascimento</span>
          <span>Telefone</span>
          <span className="text-right">Ações</span>
        </section>

        <ul className="space-y-3">
          {filtered.length === 0 && <p className="text-sm text-gray-500">Nenhum paciente encontrado.</p>}
          {filtered.map((p) => (
            <PatientList key={p.id} patient={p} />
          ))}
        </ul>
      </main>
    </div>
  );
};

export default ProviderPatientList;
