import Footer from "../../components/Footer";
import ActionButton from "../../components/ActionButton";
import { useNavigate } from "react-router";
import { routes } from "../../constants/Routes";
import BackToHomeButton from "../../components/BackToHomeButton";
import LoginForm from "../../components/forms/login/LoginForm";

const LoginPage = () => {
  const navigate = useNavigate();
  const { register } = routes;

  const handleRegisterBtn = () => {
    navigate(register);
  };

  return (
    <>
      <div className="flex flex-col min-h-svh bg-gradient-to-t from-blue-200 to-white">
        <header className="flex justify-between items-center p-2">
          <BackToHomeButton />
          <ActionButton text="Cadastre-se" action={handleRegisterBtn} />
        </header>

        <main className="grow flex items-center p-2">
          <section className="w-1/2 space-y-2">
            <h1 className="text-4xl font-bold text-gray-800">Bem-vindo de volta ao SGHSS</h1>
            <p className="text-gray-600">
              Faça login para acessar sua conta e utilizar os recursos disponíveis de acordo com seu perfil. O
              sistema oferece acesso seguro, rápido e eficiente para pacientes, prestadores e administradores.
            </p>
          </section>

          <section className="w-1/2">
            <div className="w-full max-w-60 m-auto">
              <LoginForm />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default LoginPage;
