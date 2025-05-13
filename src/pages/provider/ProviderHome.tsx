import ProviderAsideMenu from "./components/ProviderAsideMenu";

const ProviderHome = () => {
  return (
    <div className="flex min-h-dvh ">
      <ProviderAsideMenu />
      <main className="w-full">
        <h1>ola mundo</h1>
      </main>
    </div>
  );
};

export default ProviderHome;
