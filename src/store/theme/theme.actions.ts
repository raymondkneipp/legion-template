import { createAsyncThunk } from "@reduxjs/toolkit";
import { getter, setter } from "@utils";
import { Color, Radius } from "./theme.slice";

export const getTheme = createAsyncThunk(
	"theme/get",
	async (_, { rejectWithValue }) => getter("theme", rejectWithValue)
);

export const updateTheme = createAsyncThunk(
	"theme/update",
	async (data: { color: Color; radius: Radius }, { rejectWithValue }) =>
		setter("theme", { ...data }, rejectWithValue)
);
