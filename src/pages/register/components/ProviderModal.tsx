interface ProviderModalProps {
  handleCloseModal: () => void;
}

const ProviderModal = ({ handleCloseModal }: ProviderModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
        <h2 className="text-lg font-bold mb-2">Cadastro enviado com sucesso!</h2>
        <p className="text-sm text-gray-700">
          Sua solicitação de cadastro foi recebida. A equipe do SGHSS analisará as informações e entrará em
          contato para concluir o processo de ativação.
        </p>
        <button
          onClick={handleCloseModal}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Fechar
        </button>
      </div>
    </div>
  );
};

export default ProviderModal;
