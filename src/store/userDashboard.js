import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan } from "./api";

const initialState = {
  myBooks: [],
  reviewSubmited: false,
  testimonials: {
    allTestimonial: [],
    testimonialsLoading: false,
  },
};

const userDashboard = createSlice({
  name: "userDashboard",
  initialState,
  reducers: {
    setMyBooks: (state, action) => {
      state.myBooks = action.payload;
    },
    deleteBook: (state, action) => {
      if (action.payload.deletedCount > 0) {
        const index = state.myBooks.findIndex(
          (book) => book._id === action.payload.deletedId
        );
        state.myBooks.splice(index, 1);
      }
    },
    reviewSubmited: (state, action) => {
      if (action.payload.insertedId) state.reviewSubmited = true;
    },
    setReviewSubmitedStatus: (state, action) => {
      state.reviewSubmited = action.payload.state;
    },
    // Set Testimonials
    testimoanialsApiStarted: (state, action) => {
      state.testimonials.testimonialsLoading = true;
    },
    setLoadTestimonials: (state, action) => {
      state.testimonials.allTestimonial = action.payload;
      state.testimonials.testimonialsLoading = false;
    },
  },
});

export const {
  setMyBooks,
  deleteBook,
  reviewSubmited,
  setReviewSubmitedStatus,
  testimoanialsApiStarted,
  setLoadTestimonials,
} = userDashboard.actions;
export default userDashboard.reducer;

// Action Creator
const url = "/mybooks";

// Get current user books
export const loadMyBooks = (email) =>
  apiCallBegan({
    url: `${url}?email=${email}`,
    onSuccess: setMyBooks.type,
  });

//   Cancell a book
export const cancellABook = (id) =>
  apiCallBegan({
    url: `${url}/${id}`,
    method: "delete",
    onSuccess: deleteBook.type,
  });

// Review
export const savedReview = (data) =>
  apiCallBegan({
    url: "/add-review",
    method: "post",
    data,
    onSuccess: reviewSubmited.type,
  });

// Load Testimonials
export const loadTestimonials = () =>
  apiCallBegan({
    url: "/Testimonials",
    onStart: testimoanialsApiStarted.type,
    onSuccess: setLoadTestimonials.type,
  });
