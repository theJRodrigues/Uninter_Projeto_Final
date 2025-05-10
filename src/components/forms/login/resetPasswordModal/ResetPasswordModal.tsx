import { useState } from "react";
import CheckEmailForm from "./CheckEmailForm";
const Steps = {
  checkEmail: 1,
  verifyCode: 2,
  reset: 3,
};
type Steps = (typeof Steps)[keyof typeof Steps];

interface ResetPasswordModalProps {
  closeModal: () => void;
}
const ResetPasswordModal = ({ closeModal: closeModal }: ResetPasswordModalProps) => {
  const [step, setStep] = useState<Steps>(Steps.checkEmail);

  const nextToVerifyCode = () => {
    setStep(Steps.verifyCode);
  };

  const onCloseModal = () => {
    closeModal();
  };

  return (
    <section className="absolute top-0 left-0 w-full h-dvh backdrop-blur-xl flex items-center justify-center">
      {step === Steps.checkEmail ? (
        <CheckEmailForm nextStep={nextToVerifyCode} onClose={onCloseModal} />
      ) : null}
    </section>
  );
};

export default ResetPasswordModal;
