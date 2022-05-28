import { createSlice } from "@reduxjs/toolkit";
import { getNews } from "./news.actions";

export interface INewsItem {
	slug: string;
	thumbnail: string;
	date: string;
	title: string;
	content: string;
}

export interface NewsState {
	entities: INewsItem[];
}

const initialState: NewsState = {
	entities: [],
};

export const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getNews.fulfilled, (state, action) => {
			state.entities = action.payload.entities;
		});
	},
});

//export const {} = newsSlice.actions;

export default newsSlice.reducer;
