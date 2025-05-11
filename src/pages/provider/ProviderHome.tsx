import Footer from "../../components/Footer";
import ProviderNavbar from "./components/ProdiverNavbar";

const ProviderHome = () => {
  return (
    <>
      <header>
        <button>Perfil</button>
        <button>Sair</button>
      </header>
      <aside>
        <ProviderNavbar />
      </aside>
      <main></main>
      <Footer />
    </>
  );
};

export default ProviderHome;
