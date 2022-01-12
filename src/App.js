import { Routes, Route } from "react-router-dom";
import "./App.css";
import About from "./pages/About/About";
import AllServices from "./pages/AllServices/AllServices";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import Footer from "./pages/Shared/Footer/Footer";
import Navigation from "./pages/Shared/Navigation/Navigation";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/aboutus" element={<About />} />
      <Route
        path="/all-services"
        element={
          <>
            <Navigation />
            <AllServices />
            <Footer />
          </>
        }
      />
      <Route path="*" element={<PageNotFound />} />

      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
