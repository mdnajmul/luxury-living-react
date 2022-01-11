import React from "react";
import { Route, Routes } from "react-router-dom";
import AddService from "../AddService/AddService";
import AdminRoute from "../AdminRoute/AdminRoute";
import Books from "../Books/Books";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManageServices from "../ManageServices/ManageServices";
import MyBooks from "../MyBooks/MyBooks";
import Orders from "../Orders/Orders";
import Review from "../Review/Review";

const NestedRoutes = () => {
  return (
    <>
      {/* Admin Routes */}
      <Routes>
        <Route
          path="order"
          element={
            <AdminRoute>
              <Orders></Orders>
            </AdminRoute>
          }
        ></Route>
        <Route
          path="addservice"
          element={
            <AdminRoute>
              <AddService></AddService>
            </AdminRoute>
          }
        ></Route>
        <Route
          path="makeadmin"
          element={
            <AdminRoute>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
          }
        ></Route>
        <Route
          path="manageservice"
          element={
            <AdminRoute>
              <ManageServices></ManageServices>
            </AdminRoute>
          }
        ></Route>
        <Route path="book" element={<Books></Books>}></Route>
        <Route path="mybooks" element={<MyBooks></MyBooks>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
      </Routes>
    </>
  );
};

export default NestedRoutes;
