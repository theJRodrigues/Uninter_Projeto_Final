import { Route, Routes } from "react-router";
import Welcome from "./pages/welcome/Welcome";
import Provider from "./pages/provider/Provider";
import Patient from "./pages/patient/Patient";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/patient" element={<Patient />} />
        <Route path="/provider" element={<Provider />} />
        <Route path="/admin" element={<Welcome />} />
      </Routes>
    </>
  )
}

export default App;
