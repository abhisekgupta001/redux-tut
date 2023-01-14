const { createSlice } = require("@reduxjs/toolkit");

const wishlistSlice = createSlice({
  name: "wislist",
  initialState: [],
  reducers: {
    addToWishlist(state, action) {
      state.push(action.payload);
    },
    removeFromWishlist(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
