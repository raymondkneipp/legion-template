import { createAsyncThunk } from "@reduxjs/toolkit";
import { getter } from "@utils";

export const getHero = createAsyncThunk(
	"hero/get",
	async (_, { rejectWithValue }) => getter("hero", rejectWithValue)
);
