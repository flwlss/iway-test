// import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
// // import { AuthState, LoginCredentials, AuthResponse } from "./types";
// import { CookieService } from "../api/cookies";

// const initialState: any = {
//   token: CookieService.getCookie("auth_token"),
//   isLoading: false,
//   error: null,
//   isAuthenticated: !!CookieService.getCookie("auth_token"),
// };

// export const authSlice = createSlice({
//   name: "auth",
//   initialState,
//   reducers: {
//     loginStart: (state) => {
//       state.isLoading = true;
//       state.error = null;
//     },
//     loginSuccess: (state, action: PayloadAction<string>) => {
//       state.isLoading = false;
//       state.token = action.payload;
//       state.isAuthenticated = true;
//       state.error = null;

//       // Сохраняем токен в cookie
//       CookieService.setCookie("auth_token", action.payload, 7);
//     },
//     loginFailure: (state, action: PayloadAction<string>) => {
//       state.isLoading = false;
//       state.error = action.payload;
//       state.isAuthenticated = false;
//       state.token = null;
//     },
//     logout: (state) => {
//       state.token = null;
//       state.isAuthenticated = false;
//       state.error = null;

//       // Удаляем токен из cookie
//       CookieService.deleteCookie("auth_token");
//     },
//     clearError: (state) => {
//       state.error = null;
//     },
//   },
// });

// export const { loginStart, loginSuccess, loginFailure, logout, clearError } =
//   authSlice.actions;
// export default authSlice;
