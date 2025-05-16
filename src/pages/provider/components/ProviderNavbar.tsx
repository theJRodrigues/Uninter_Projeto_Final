import { NavLink } from "react-router";
import { routes } from "../../../constants/Routes";
import { Calendar, Clipboard, Home, Power, ShieldPlus, UserRound } from "lucide-react";
import { useNavigate } from "react-router";

const ProviderNavbar = () => {
  const { provider } = routes;
  const navigate = useNavigate();
  return (
    <nav className="flex flex-col gap-1 text-white font-sans ">
      <NavLink
        to={"/" + provider.index}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
        end
      >
        <Home />
        Home
      </NavLink>
      <NavLink
        to={`/${provider.index}/${provider.appointments}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
        end
      >
        <Clipboard />
        Atendimentos
      </NavLink>
      <NavLink
        to={`/${provider.index}/${provider.agenda}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
        end
      >
        <Calendar />
        Agenda
      </NavLink>
      <NavLink
        to={`/${provider.index}/${provider.patients}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1"
        end
      >
        <UserRound />
        Pacientes
      </NavLink>

      <NavLink
        to={`/${provider.index}/${provider.institution}`}
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1 whitespace-nowrap"
        end
      >
        <ShieldPlus />
        Minha Instituição
      </NavLink>

      <button
        className="px-2 py-1 hover:bg-blue-700 rounded  flex items-center gap-1 cursor-pointer"
        onClick={() => navigate("/")}
      >
        <Power />
        Sair
      </button>
    </nav>
  );
};

export default ProviderNavbar;
