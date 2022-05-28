import { createAsyncThunk } from "@reduxjs/toolkit";
import { getter, setter } from "@utils";

export const getPostData = createAsyncThunk(
	"post/get",
	async (_, { rejectWithValue }) => getter("posts", rejectWithValue)
);

export const updatePostData = createAsyncThunk(
	"post/update",
	async (name: string, { rejectWithValue }) =>
		setter("posts", { name }, rejectWithValue)
);
