import { createAsyncThunk } from "@reduxjs/toolkit";
import { getter } from "@utils";

export const getContact = createAsyncThunk(
	"contact/get",
	async (_, { rejectWithValue }) => getter("contact", rejectWithValue)
);
