import { useState } from "react";
import CheckEmailForm from "./forms/CheckEmailForm";
import VerifyCodeModal from "./forms/VerifyCodeForm";
import ResetPasswordForm from "./forms/ResetPasswordForm";
import PasswordResetSuccessModal from "./ResetSucces";
const steps = {
  checkEmail: 1,
  verifyCode: 2,
  resetPassword: 3,
  succes: 4,
};
type steps = (typeof steps)[keyof typeof steps];

interface ResetPasswordModalProps {
  closeModal: () => void;
}
const ResetPasswordModal = ({ closeModal: closeModal }: ResetPasswordModalProps) => {
  const [step, setStep] = useState<steps>(steps.checkEmail);

  const nextTo = (inStep: steps) => {
    setStep(inStep);
  };

  const onCloseModal = () => {
    closeModal();
  };

  return (
    <section className="absolute top-0 left-0 w-full h-dvh backdrop-blur-xl flex items-center justify-center">
      {step === steps.checkEmail ? (
        <CheckEmailForm nextStep={() => nextTo(steps.verifyCode)} onClose={onCloseModal} />
      ) : step === steps.verifyCode ? (
        <VerifyCodeModal nextStep={() => nextTo(steps.resetPassword)} onClose={onCloseModal} />
      ) : step === steps.resetPassword ? (
        <ResetPasswordForm onClose={closeModal} nextStep={() => nextTo(steps.succes)} />
      ) : step === steps.succes ? (
        <PasswordResetSuccessModal onClose={onCloseModal} />
      ) : null}
    </section>
  );
};

export default ResetPasswordModal;
