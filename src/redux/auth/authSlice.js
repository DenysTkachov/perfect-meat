import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { user: null, token: null, role: null, users: [] },
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.role = action.payload.role;
    },
    logout: (state) => {
      state.user = null;
      state.token = null;
      state.role = null;
    },
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    registerUser: (state, action) => {
      state.users.push(action.payload);
    },
  },
});

export const { login, logout, setUsers, registerUser } = authSlice.actions;
export default authSlice.reducer;
