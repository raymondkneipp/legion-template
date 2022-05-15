import { createSlice } from "@reduxjs/toolkit";
import { getHero } from "./hero.actions";

export interface HeroState {
	text: string;
	image: string;
}

const initialState: HeroState = {
	text: "",
	image: "hero.jpg",
};

export const heroSlice = createSlice({
	name: "hero",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getHero.fulfilled, (state, action) => {
			state.text = action.payload.text;
			state.image = action.payload.image;
		});
	},
});

//export const {} = heroSlice.actions;

export default heroSlice.reducer;
