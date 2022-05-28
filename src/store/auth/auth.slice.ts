import { createSlice } from "@reduxjs/toolkit";
import { login, logout, signup } from "./auth.actions";

export interface AuthState {
	email: string | null | undefined;
	authenticated: boolean;
	error?: string;
	loading: boolean;
}

const initialState: AuthState = {
	email: "",
	authenticated: false,
	error: "",
	loading: true,
};

export const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.email = action.payload;
			state.authenticated = true;
			state.loading = false;
		},
		clear: (state) => {
			state.authenticated = initialState.authenticated;
			state.email = initialState.email;
			state.loading = false;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(login.fulfilled, (state, action) => {
			state.email = action.payload?.email;
			state.authenticated = true;
			state.loading = false;
			state.error = initialState.error;
		});
		builder.addCase(login.rejected, (state, action) => {
			state.error = "Failed to login";
			state.authenticated = initialState.authenticated;
			state.email = initialState.email;
			state.loading = false;
		});
		builder.addCase(signup.fulfilled, (state, action) => {
			state.email = action.payload?.email;
			state.authenticated = true;
			state.loading = false;
			state.error = initialState.error;
		});
		builder.addCase(signup.rejected, (state, action) => {
			state.error = "Failed to sign up";
			state.authenticated = initialState.authenticated;
			state.email = initialState.email;
			state.loading = false;
		});
		builder.addCase(logout.fulfilled, (state, action) => {
			state.authenticated = initialState.authenticated;
			state.email = initialState.email;
			state.error = initialState.error;
			state.loading = false;
		});
		builder.addCase(logout.rejected, (state, action) => {
			state.authenticated = initialState.authenticated;
			state.email = initialState.email;
			state.error = initialState.error;
			state.loading = false;
		});
	},
});

export const { setUser, clear } = authSlice.actions;

export default authSlice.reducer;
