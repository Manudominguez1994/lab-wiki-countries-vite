import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
function App() {
  return (
    <div className="App">
      <h1>LAB | React WikiCountries</h1>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/:countryId" element={<CountryDetailsPage />}/>
      </Routes>
    </div>
  );
}

export default App;
