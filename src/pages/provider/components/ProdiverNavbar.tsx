import { NavLink } from "react-router";
import { routes } from "../../../constants/Routes";

const ProviderNavbar = () => {
  const { provider } = routes;
  return (
    <nav>
      <NavLink to={provider.services}>Atendimentos</NavLink>
    </nav>
  );
};

export default ProviderNavbar;
