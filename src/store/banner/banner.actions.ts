import { createAsyncThunk } from "@reduxjs/toolkit";
import { getter } from "@utils";

export const getBanner = createAsyncThunk(
	"banner/get",
	async (_, { rejectWithValue }) => getter("banner", rejectWithValue)
);
