import { HashRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import City from "./pages/City";
import Login from "./pages/Login";
import Account from "./pages/Account";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/city/:id" element={<City />} />
        <Route path="/login" element={<Login />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
