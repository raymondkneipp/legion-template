import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getPostData } from "./post.actions";

export interface PostState {
	id: string;
	name: string;
}

const initialState: PostState = {
	id: "",
	name: "",
};

export const postSlice = createSlice({
	name: "post",
	initialState,
	reducers: {
		setId: (state, action: PayloadAction<string>) => {
			state.id = action.payload;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(getPostData.fulfilled, (state, action) => {
			state.name = action.payload.name;
		});
	},
});

export const { setId } = postSlice.actions;

export default postSlice.reducer;
