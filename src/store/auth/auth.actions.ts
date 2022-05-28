import { createAsyncThunk } from "@reduxjs/toolkit";
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signOut,
} from "firebase/auth";
import { auth } from "@utils";

interface IParams {
	email: string;
	password: string;
}

export const login = createAsyncThunk(
	"auth/login",
	async (req: IParams, { rejectWithValue }) => {
		try {
			const res = await signInWithEmailAndPassword(
				auth,
				req.email,
				req.password
			);

			return { email: res.user.email };
		} catch (error) {
			return rejectWithValue("Failed to login");
		}
	}
);

export const signup = createAsyncThunk(
	"auth/signup",
	async (req: IParams, { rejectWithValue }) => {
		try {
			const res = await createUserWithEmailAndPassword(
				auth,
				req.email,
				req.password
			);

			return { email: res.user.email };
		} catch (error) {
			return rejectWithValue("Failed to sign up");
		}
	}
);

export const logout = createAsyncThunk(
	"auth/logout",
	async (_, { rejectWithValue }) => {
		try {
			const res = await signOut(auth);
			return res;
		} catch (error) {
			return rejectWithValue("Failed to logout");
		}
	}
);
