import { useNavigate } from "react-router";
import Footer from "../../components/Footer";
import { routes } from "../../constants/Routes";
import ActionButton from "../../components/ActionButton";

const Home = () => { 
  const navigate = useNavigate();
  const {login, register} = routes
  const navigateToLogin = () => {
    navigate(login)
  };
  
  const navigateToRegister = () => {
    navigate(register)
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
            <ActionButton 
            action={navigateToRegister} 
            text="Cadastre-se"
            className="bg-green-600 hover:bg-green-700" />   
            
            <ActionButton 
            action={navigateToLogin} 
            text="Faça Login" />
            </div>
        </section>
      </section>
    </main>  
    <Footer />
  </div>
  );
};

export default Home;
