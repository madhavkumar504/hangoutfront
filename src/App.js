import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/User/Signup";

import axios from "axios";
import Dashboard from "./Components/User/Dashboard";

// Set up the CSRF token in Axios headers globally
// const csrfToken = document
//   .querySelector('meta[name="csrf-token"]')
//   .getAttribute("content");
// axios.defaults.headers.common["X-CSRF-TOKEN"] = csrfToken;
// axios.defaults.withCredentials = true;

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
