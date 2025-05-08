import { Route, Routes } from "react-router";
import Home from "./pages/home/Home"
import RegisterPage from "./pages/register/RegisterPage";
import { routes } from "./constants/Routes";
import LoginPage from "./pages/login/LoginPage";

function App() {
  const { home, login, register } = routes;
  return (
    <>
      <Routes>
        <Route path={home} element={<Home />} />
        <Route path={login} element={<LoginPage />} />
        <Route path={register} element={<RegisterPage />} />
      </Routes>
    </>
  )
}

export default App;
