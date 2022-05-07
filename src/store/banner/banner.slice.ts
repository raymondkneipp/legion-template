import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface BannerState {
	show: Boolean;
	text: String;
}

const initialState: BannerState = {
	show: true,
	text: "This is the banner text",
};

export const bannerSlice = createSlice({
	name: "banner",
	initialState,
	reducers: {
		toggle: (state) => {
			state.show = !state.show;
		},
	},
});

export const { toggle } = bannerSlice.actions;

export default bannerSlice.reducer;
