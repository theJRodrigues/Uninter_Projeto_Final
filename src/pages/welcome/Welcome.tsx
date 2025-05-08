import { useNavigate } from "react-router";
import Footer from "../../components/Footer";
import ButtonToNavigate from "./components/ButtonToNavigate";

const Welcome = () => { 
  const navigate = useNavigate();
  
  const navigateToPatientPage = () => {
    navigate("/patient")
  };
  
  const navigateToAdminPage = () => {
    navigate("/admin")
  };
  
  const navigateToProviderPage = () => {
    navigate("/provider")
  };
  
  return (
  <div className="min-h-svh flex flex-col">
    <main className="grow bg-gradient-to-t from-blue-200 to-white font-serif text-gray-700 flex flex-col justify-center items-center">
      <section className="text-center space-y-3">
        <hgroup>
          <h1 className="text-blue-700 text-9xl font-bold">SGHSS</h1>
          <h2 className="text-xl text-blue-900">Sistema de Gestão Hospitalar Saúde e Segurança</h2>
        </hgroup>
        <p>Conectando pacientes e profissionais com agilidade</p>
        
        <section className="text-white space-y-2 flex flex-col items-center">
          <div className="flex gap-2 justify-center">
            <ButtonToNavigate 
            handleClick={navigateToProviderPage} 
            text="Prestador" />   
            
            <ButtonToNavigate 
            handleClick={navigateToPatientPage} 
            text="Paciente" 
            className="bg-blue-600 hover:bg-blue-700"/>
          </div>
          
          <ButtonToNavigate 
          handleClick={navigateToAdminPage}
          text="Administrador"
          className="bg-gray-600 hover:bg-gray-700"/>
        </section>
      </section>
    </main>  
    <Footer />
  </div>
  );
};

export default Welcome;
