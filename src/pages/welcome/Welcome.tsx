import { useNavigate } from "react-router";
import Footer from "../../components/Footer";
import ButtonToNavigate from "./components/ButtonToProviderPage";

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
        
        <section className="space-x-5 text-white space-y-2">
          <ButtonToNavigate 
          handleClick={navigateToProviderPage} 
          text="Prestador" />   
           
          <ButtonToNavigate 
          handleClick={navigateToPatientPage} 
          text="Paciente" 
          className="bg-blue-600 hover:bg-blue-700"/>
          
          <ButtonToNavigate 
          handleClick={navigateToAdminPage}
          text="Administrador"
          className="bg-gray-600 hover:bg-gray-700 block m-auto"/>
        </section>
      </section>
    </main>  
    <Footer />
  </div>
  );
};

export default Welcome;
