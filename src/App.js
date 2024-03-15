import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invoices from './components/Invoices'
import Success from './components/Success'
import Cancel from './components/Cancel'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Invoices />} />
      <Route path="/success" element={<Success />} />
      <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
