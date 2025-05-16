import { useNavigate } from "react-router";
import ProviderAsideMenu from "./components/ProviderAsideMenu";
import { routes } from "../../constants/Routes";

const ProviderHome = () => {
  const navigate = useNavigate();
  const articleStyle = "ring ring-gray-400 rounded p-3 cursor-pointer max-w-50 hover:ring-blue-600";
  const { provider } = routes;

  const navigateTo = (route: string) => {
    navigate(route);
  };
  return (
    <div className="flex min-h-dvh font-sans">
      <ProviderAsideMenu />
      <main className="w-full p-6 space-y-5">
        <section className="space-y-2">
          <h1 className="text-5xl font-bold">Painel do prestador</h1>
          <p className="text-xl">
            Gerencie seus atendimentos, agendamentos e informações da instituição de saúde.
          </p>
        </section>

        <section className="grid grid-cols-2 grid-rows-2 gap-5">
          <article className={articleStyle} onClick={() => navigateTo(provider.appointments)}>
            <h1 className="font-bold text-lg">Atendimentos</h1>
            <p>Visualize e organize os atendimentos realizados</p>
          </article>
          <article className={articleStyle} onClick={() => navigateTo(provider.agenda)}>
            <h1 className="font-bold text-lg">Agenda</h1>
            <p>Consulte e marque consultas na sua agenda</p>
          </article>
          <article className={articleStyle} onClick={() => navigateTo(provider.patients)}>
            <h1 className="font-bold text-lg">Pacientes</h1>
            <p>Acesse os dados e históricos dos pacientes</p>
          </article>
          <article className={articleStyle} onClick={() => navigateTo(provider.appointments)}>
            <h1 className="font-bold text-lg">Minha Instituição</h1>
            <p>Atualize as informações da sua instituição de saúde</p>
          </article>
        </section>
      </main>
    </div>
  );
};

export default ProviderHome;
