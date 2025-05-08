import { Route, Routes } from "react-router";
import Home from "./pages/home/Home"
import Patient from "./pages/patient/Patient";
import Register from "./pages/register/RegisterForm";
import { routes } from "./constants/Routes";

function App() {
  const { home, login, register } = routes;
  return (
    <>
      <Routes>
        <Route path={home} element={<Home />} />
        {/* <Route path={login} element={<Patient />} /> */}
        <Route path={register} element={<Register />} />
      </Routes>
    </>
  )
}

export default App;
