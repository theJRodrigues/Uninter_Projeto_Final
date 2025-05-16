import { useState } from "react";
import PatientEditModal from "./PatientEditModal";
import type { Patient } from "./ProviderPatientList";
import { Pencil, Trash2 } from "lucide-react";
import { createPortal } from "react-dom";

interface PatientListProps {
  patient: Patient;
}

const PatientList = ({ patient }: PatientListProps) => {
  const [showModal, setShowModal] = useState(false);
  const handleDelete = (id: number) => {
    console.log("Excluir paciente ID:", id);
  };
  return (
    <>
      <li
        key={patient.id}
        className="grid grid-cols-5 w-full border px-3 py-1 rounded shadow-sm hover:border-blue-400"
      >
        <span className="text-gray-800 font-medium">{patient.name}</span>
        <span className="text-sm text-gray-600">{patient.document}</span>
        <span className="text-sm text-gray-600">{patient.birthdate}</span>
        <span className="text-sm text-gray-600">{patient.phone}</span>
        <div className="flex gap-2 justify-end">
          <button
            onClick={() => setShowModal(true)}
            className="text-blue-600 hover:text-blue-800 cursor-pointer"
          >
            <Pencil size={18} />
          </button>
          <button
            onClick={() => handleDelete(patient.id)}
            className="text-red-500 hover:text-red-700 cursor-pointer"
          >
            <Trash2 size={18} />
          </button>
        </div>
      </li>
      {showModal &&
        createPortal(
          <PatientEditModal patient={patient} onClose={() => setShowModal(false)} />,
          document.body,
        )}
    </>
  );
};

export default PatientList;
