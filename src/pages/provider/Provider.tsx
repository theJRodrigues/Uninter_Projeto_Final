import { useState } from "react";
import Footer from "../../components/Footer";
import ActionButton from "../../components/ActionButton";

import LoginForm from "../../components/LoginForm";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import RegisterFormProvider from "../../components/ProviderRegisterForm";

const Provider = () => {
  const [formOption, setFormOption] = useState('register');
  const navigate = useNavigate();
  
  const handleFormOptionChange = (option: string) => {
    setFormOption(option);
  };
  
  return (
    <>
      <button
       className="p-2 absolute cursor-pointer" 
        onClick={() => navigate("/")}>
        <ArrowLeft size={30}/>
      </button>
      <div className="flex flex-col min-h-dvh bg-gradient-to-t from-blue-200 to-white">
        <main className="grow flex items-center  max-w-[1900px] m-auto">
          <section className="w-[50%] p-3">
            <section>
              <h1 className="text-4xl font-bold text-gray-800 mb-4 w-[70%]">
                Área do Prestador de Serviços da Saúde
              </h1>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Gerencie sua instituição com segurança, agilidade e tecnologia.
                Hospitais, clínicas e laboratórios podem se conectar à rede SGHSS para oferecer um atendimento mais eficiente e integrado.
              </p>
            </section>
            <section className="flex justify-around text-center text-sm">
              <ActionButton 
                action={() => handleFormOptionChange('login')} 
                title="Já é parceiro?" 
                text="Faça login"
              />
              <ActionButton 
                action={() =>handleFormOptionChange('register')} 
                title="Ainda não é parceiro?" 
                text="Cadastre-se"
                className="bg-green-600 hover:bg-green-700"
              />
            </section>
          </section>
          
          <section className="w-[50%] p-2 ">
            <div className="w-full max-w-60 shadow-2xl mx-auto rounded">
              { formOption === 'register' ? <RegisterFormProvider/> : formOption === "login" ? <LoginForm/> : null}
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};
export default Provider;
