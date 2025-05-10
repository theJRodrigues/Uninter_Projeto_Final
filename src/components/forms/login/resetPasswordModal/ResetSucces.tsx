interface PasswordResetSuccessModalProps {
  onClose: () => void;
}

const PasswordResetSuccessModal = ({ onClose }: PasswordResetSuccessModalProps) => {
  return (
    <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm text-center">
      <h2 className="text-xl font-bold text-green-600 mb-2">Senha redefinida com sucesso</h2>
      <p className="text-gray-700 text-sm mb-4">Agora você já pode fazer login com sua nova senha.</p>
      <button
        onClick={onClose}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 text-sm cursor-pointer"
      >
        Ir para login
      </button>
    </div>
  );
};

export default PasswordResetSuccessModal;
