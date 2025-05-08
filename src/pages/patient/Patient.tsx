// Patient.tsx
import { useState } from "react";
import Footer from "../../components/Footer";
import ActionButton from "../../components/ActionButton";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import LoginForm from "../../components/LoginForm";
import PatientRegisterForm from "./components/RegisterFormPatient";

const Patient = () => {
  const [formOption, setFormOption] = useState("register");
  const navigate = useNavigate();

  const handleFormOptionChange = (option: string) => {
    setFormOption(option);
  };

  return (
    <>
      <button className="p-2 absolute cursor-pointer" onClick={() => navigate("/")}>
        <ArrowLeft size={30} />
      </button>

      <div className="flex flex-col min-h-dvh bg-gradient-to-t from-blue-200 to-white">
        <main className="grow flex items-center max-w-[1900px] ">
          <section className="w-[50%] p-3">
            <section>
              <h1 className="text-4xl font-bold text-gray-800 mb-4 w-[70%]">
                Área do Paciente
              </h1>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Acesse seu histórico, agende consultas, acompanhe prescrições e mantenha seus dados de saúde sempre atualizados.
              </p>
            </section>

            <section className="flex justify-around text-center text-sm">
              <ActionButton
                action={() => handleFormOptionChange("login")}
                title="Já é cadastrado?"
                text="Faça login"
              />
              <ActionButton
                action={() => handleFormOptionChange("register")}
                title="Primeira vez aqui?"
                text="Cadastre-se"
                className="bg-green-600 hover:bg-green-700"
              />
            </section>
          </section>

          <section className="w-[50%] p-2">
            <div className="w-full max-w-60 shadow-2xl mx-auto rounded">
              {formOption === "register" ? <PatientRegisterForm/> : formOption === "login" ? <LoginForm /> : null}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Patient;
