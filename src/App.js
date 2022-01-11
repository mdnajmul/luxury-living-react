import { Routes, Route } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import Orders from "./pages/Dashboard/Orders/Orders";
import AddService from "./pages/Dashboard/AddService/AddService";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageServices from "./pages/Dashboard/ManageServices/ManageServices";
import Books from "./pages/Dashboard/Books/Books";
import MyBooks from "./pages/Dashboard/MyBooks/MyBooks";
import Review from "./pages/Dashboard/Review/Review";
import initializeAuthentication from "./pages/Login/Firebase/firebase.init";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

initializeAuthentication();

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<PageNotFound />} />

      <Route
        path="/dashboard/*"
        element={
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        }
      />
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
  );
}

export default App;
