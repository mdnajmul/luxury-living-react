import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import Navigation from "./pages/Shared/Navigation/Navigation";
import Orders from "./pages/Dashboard/Orders/Orders";
import AddService from "./pages/Dashboard/AddService/AddService";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./pages/Dashboard/ManageServices/ManageServices";
import Books from "./pages/Dashboard/Books/Books";
import MyBooks from "./pages/Dashboard/MyBooks/MyBooks";
import Review from "./pages/Dashboard/Review/Review";
import initializeAuthentication from "./Firebase/firebase.init";

initializeAuthentication();

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path={`/dashboard/order`} element={<Orders></Orders>}></Route>
          <Route
            path={`/dashboard/addservice`}
            element={<AddService></AddService>}
          ></Route>
          <Route
            path={`/dashboard/makeadmin`}
            element={<MakeAdmin></MakeAdmin>}
          ></Route>
          <Route
            path={`/dashboard/manageservice`}
            element={<ManageServices></ManageServices>}
          ></Route>
          <Route path={`/dashboard/book`} element={<Books></Books>}></Route>
          <Route
            path={`/dashboard/mybooks`}
            element={<MyBooks></MyBooks>}
          ></Route>
          <Route path={`/dashboard/review`} element={<Review></Review>}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
