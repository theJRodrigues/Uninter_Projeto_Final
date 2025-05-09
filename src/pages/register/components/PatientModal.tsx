interface PatienModalProps {
  handleCloseModal: () => void;
}

const PatientModal = ({ handleCloseModal }: PatienModalProps) => {
  return (
    <div className="absolute top-0 left-0 w-full h-svh flex items-center justify-center bg-black bg-opacity-50 z-50">
      <section className="bg-white p-6 rounded shadow-md max-w-sm w-full">
        <h2 className="text-lg font-bold mb-2">Cadastro enviado com sucesso!</h2>
        <p className="text-sm text-gray-700">
          Seu cadastro foi realizado com sucesso. Agora você já pode fazer login no sistema.
        </p>
        <button
          onClick={handleCloseModal}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Fechar
        </button>
      </section>
    </div>
  );
};

export default PatientModal;
