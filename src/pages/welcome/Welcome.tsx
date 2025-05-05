const Welcome = () => {
  return (
    <main className="bg-gradient-to-t from-blue-200 to-white min-h-svh font-serif text-gray-700 flex flex-col justify-center items-center">
      <section className="text-center space-y-3">
        <hgroup>
          <h1 className="text-blue-700 text-9xl font-bold">SGHSS</h1>
          <h2 className="text-xl text-blue-900">Sistema de Gestão Hospitalar Saúde e Segurança</h2>
        </hgroup>
        <p>Conectando pacientes e profissionais com agilidade</p>
        <section className="space-x-5 text-white">
          <button className="bg-green-600 py-2 px-3 rounded w-[200px] hover:bg-green-700 cursor-pointer"> Prestador</button>
          <button className="bg-blue-600 py-2 px-3 rounded w-[200px] hover:bg-blue-700 cursor-pointer">Paciente</button>
          <button className="bg-gray-600 py-2 px-3 rounded w-[200px] hover:bg-gray-700 cursor-pointer block m-auto mt-2">Administrador</button>
        </section>
      </section>
    </main>
  );
};

export default Welcome;
