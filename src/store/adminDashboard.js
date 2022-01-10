import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  services: {
    serviceAdded: false,
  },
  makeAdmin: {
    adminAddSuccess: false,
  },
  users: {
    allUsers: [],
    usersLoading: false,
  },
};

const adminDashboard = createSlice({
  name: "adminDashbord",
  initialState,
  reducers: {
    // State change for successfully service added
    serviceAddedSuccess: (state, action) => {
      if (action.payload.insertedId) state.services.serviceAdded = true;
    },
    setServiceAdded: (state, action) => {
      state.services.serviceAdded = action.payload.status;
    },
    // Make Admin Section
    makeAdminSuccess: (state, action) => {
      if (action.payload.modifiedCount > 0) {
        state.makeAdmin.adminAddSuccess = true;
        console.log(action.payload.modifiedCount);
      }
    },
    setMakeAdminStatus: (state, action) => {
      state.makeAdmin.adminAddSuccess = action.payload.status;
    },
    // Mange users section
    setUsersLoading: (state, action) => {
      state.users.usersLoading = true;
    },
    setUsers: (state, action) => {
      state.users.allUsers = action.payload;
      state.users.usersLoading = false;
    },
    setDeleteUser: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.users.allUsers.findIndex(
          (user) => user._id === action.payload._id
        );
        state.users.allUsers.splice(index, 1);
      }
    },
  },
});

export const {
  serviceAddedSuccess,
  setServiceAdded,
  makeAdminSuccess,
  setMakeAdminStatus,
  setUsersLoading,
  setUsers,
  setDeleteUser,
} = adminDashboard.actions;
export default adminDashboard.reducer;

// Action Creators

// Save Service to DB
export const addServiceData = (data) =>
  apiCallBegan({
    url: "/services",
    method: "post",
    data,
    onSuccess: serviceAddedSuccess.type,
  });

// Make an Admin
export const makeAdmin = (email) =>
  apiCallBegan({
    url: `/make-admin/${email}`,
    method: "put",
    onSuccess: makeAdminSuccess.type,
  });

/* ======================== MANAGE UERS START ======================*/
// Load Users
export const loeadUsers = () =>
  apiCallBegan({
    url: "/users",
    onStart: setUsersLoading.type,
    onSuccess: setUsers.type,
  });

// Delete user
export const deleteUser = (id) =>
  apiCallBegan({
    url: `/users/${id}`,
    method: "delete",
    onSuccess: setDeleteUser.type,
  });

/* ======================== MANAGE UERS  END ======================*/
