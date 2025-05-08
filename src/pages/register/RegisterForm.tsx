import { useState } from 'react';
import Footer from '../../components/Footer';
import ActionButton from '../../components/ActionButton';
import { useNavigate } from 'react-router';
import { routes } from '../../constants/Routes';
import BackToButton from '../../components/BackToButton';
import ProviderRegisterForm from '../../components/forms/ProviderRegisterForm';
import PatientRegisterForm from '../../components/forms/PatientRegisterForm';

const Register = () => {
  const registerOptions = {
    provider: "provider",
    patient: "patient"
  }
  const [registerOpt, setRegisterOpt] = useState('');
  const navigate = useNavigate();
  const { home, login } = routes;
  
  const handleLoginBtn = () =>{
    console.log("teste")
    navigate(login)
  }
  
  const handleClickBackToHome = () =>{
    navigate(home)
  }
  
  const handleProviderForm = () =>{
    setRegisterOpt(registerOptions.provider);
  }
  
  const handlePatientForm = () =>{
    setRegisterOpt(registerOptions.patient);
  }
  return (
    <>
      <div className='flex flex-col min-h-svh bg-gradient-to-t from-blue-200 to-white'>
        <header className='flex justify-between items-center p-2'>
          <BackToButton handleClick= {handleClickBackToHome} />
          <ActionButton text='Faça Login' action={handleLoginBtn}/>
        </header>
        <main className='grow flex items-center p-2'>
          <section className='w-1/2 space-y-2'>
            <h1 className='text-4xl font-bold text-gray-800'>
              Crie sua conta no SGHSS
            </h1>
            <p className='text-gray-600'>
              O Sistema de Gestão Hospitalar Saúde e Segurança oferece uma plataforma unificada para acesso e gerenciamento de serviços em saúde. Ao se cadastrar, você terá acesso personalizado de acordo com o seu perfil, garantindo uma experiência segura, prática e eficiente.
            </p>
            <h1 className='text-center'>
              Escolha o perfil que deseja cadsatrar
            </h1>
            <section className='flex gap-4 justify-center'>
              <ActionButton text='Paciente'  action= {handlePatientForm} />
              <ActionButton text='Prestador' className='bg-green-600 hover:bg-green-700' action= {handleProviderForm} />
            </section>
          </section>
          
          <section className='w-1/2'>
            <div className='w-full max-w-60 m-auto'>
              {
                registerOpt === registerOptions.provider ? <ProviderRegisterForm/>
                :registerOpt === registerOptions.patient ? <PatientRegisterForm/>
                :null
              }
            </div>
          </section>
        </main>
        <Footer/>
      </div>
    </>
  );
};

export default Register;