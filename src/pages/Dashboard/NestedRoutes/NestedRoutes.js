import React from "react";
import { Route, Routes } from "react-router-dom";
import AddService from "../AddService/AddService";
import Books from "../Books/Books";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageServices/ManageServices";
import MyBooks from "../MyBooks/MyBooks";
import Orders from "../Orders/Orders";
import Review from "../Review/Review";

const NestedRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="order" element={<Orders></Orders>}></Route>
        <Route path="addservice" element={<AddService></AddService>}></Route>
        <Route path="makeadmin" element={<MakeAdmin></MakeAdmin>}></Route>
        <Route
          path="manageservice"
          element={<ManageServices></ManageServices>}
        ></Route>
        <Route path="book" element={<Books></Books>}></Route>
        <Route path="mybooks" element={<MyBooks></MyBooks>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
      </Routes>
    </>
  );
};

export default NestedRoutes;
