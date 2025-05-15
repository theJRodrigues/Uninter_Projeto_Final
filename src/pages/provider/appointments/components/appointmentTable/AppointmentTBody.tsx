import { useState } from "react";
import AppointmentViewModal from "../AppointmentViewModal";
import { createPortal } from "react-dom";

interface AppointmentTBodyProps {
  patient: string;
  date: string;
  time: string;
  status: string;
}

const AppointmentTBody = ({ patient, date, time, status }: AppointmentTBodyProps) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <tr className="border border-gray-500">
        <td className="px-1 py-1">{patient}</td>
        <td className="px-1 py-1">{date}</td>
        <td className="px-1 py-1">{time}</td>
        <td className="px-1 py-1">
          <span
            className={`text-sm font-medium px-1 py-1 rounded-full ${
              status === "Realizado"
                ? "bg-green-100 text-green-700"
                : status === "Agendado"
                  ? "bg-blue-100 text-blue-700"
                  : "bg-red-100 text-red-700"
            }`}
          >
            {status}
          </span>
        </td>
        <td className="px-1 py-1 space-x-2">
          <button
            className="text-sm text-blue-600 hover:underline cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            Ver
          </button>
        </td>
      </tr>
      {showModal &&
        createPortal(
          <AppointmentViewModal
            date={date}
            time={time}
            patientName={patient}
            status={status}
            onClose={() => setShowModal(false)}
          />,
          document.body,
        )}
    </>
  );
};

export default AppointmentTBody;
