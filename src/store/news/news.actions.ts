import { createAsyncThunk } from "@reduxjs/toolkit";
import { getter } from "@utils";

export const getNews = createAsyncThunk(
	"news/get",
	async (_, { rejectWithValue }) => getter("news", rejectWithValue)
);
