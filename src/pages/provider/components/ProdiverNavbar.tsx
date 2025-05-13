import { NavLink } from "react-router";
import { routes } from "../../../constants/Routes";
import { Calendar, Clipboard, Home, Power, Settings, ShieldPlus, UserRound } from "lucide-react";

const ProviderNavbar = () => {
  const { provider } = routes;
  return (
    <nav className="flex flex-col gap-1 text-white font-sans ">
      <NavLink
        to={"/" + provider.index}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
      >
        <Home />
        Home
      </NavLink>
      <NavLink
        to={`/${provider.index}/${provider.services}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
      >
        <Clipboard />
        Atendimentos
      </NavLink>
      <NavLink
        to={`/${provider.index}/${provider.services}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
      >
        <Calendar />
        Agenda
      </NavLink>
      <NavLink
        to={`/${provider.index}/${provider.services}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
      >
        <UserRound />
        Pacientes
      </NavLink>

      <NavLink
        to={`/${provider.index}/${provider.services}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1 whitespace-nowrap"
      >
        <ShieldPlus />
        Minha Instituição
      </NavLink>
      <NavLink
        to={`/${provider.index}/${provider.services}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
      >
        <Settings />
        Configurações
      </NavLink>
      <NavLink
        to={`/${provider.index}/${provider.services}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
      >
        <Power />
        Sair
      </NavLink>
    </nav>
  );
};

export default ProviderNavbar;
