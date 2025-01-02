import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Planning } from "./Page/Planning/Planning";
import { Main } from "./Page/MainPage";
import { MakePlanning } from "./Page/Planning/MakePlanning";
import { Login } from "./Page/signup/Login"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/planning" element={<Planning />} />
          <Route path="/makePlanning" element={<MakePlanning />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
