import { Route, Routes } from "react-router";
import Home from "./pages/home/Home";
import RegisterPage from "./pages/register/RegisterPage";
import { routes } from "./constants/Routes";
import LoginPage from "./pages/login/LoginPage";
import ProviderHome from "./pages/provider/ProviderHome";
import ProviderAppointments from "./pages/provider/appointments/ProviderAppointments";
import ProviderAgenda from "./pages/provider/agenda/ProviderAgenda";
import ProviderPatientList from "./pages/provider/patient/ProviderPatientList";

function App() {
  const { home, login, register, provider } = routes;
  return (
    <>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={login} element={<LoginPage />} />
        <Route path={register} element={<RegisterPage />} />
        <Route path={provider.index}>
          <Route index element={<ProviderHome />} />
          <Route path={provider.appointments} element={<ProviderAppointments />} />
          <Route path={provider.agenda} element={<ProviderAgenda />} />
          <Route path={provider.patients} element={<ProviderPatientList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
