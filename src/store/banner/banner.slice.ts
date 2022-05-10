import { createSlice } from "@reduxjs/toolkit";
import { getBanner } from "./banner.actions";

export interface BannerState {
	show: boolean;
	text: string;
}

const initialState: BannerState = {
	show: false,
	text: "",
};

export const bannerSlice = createSlice({
	name: "banner",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getBanner.fulfilled, (state, action) => {
			state.show = action.payload.show;
			state.text = action.payload.text;
		});
	},
});

//export const {} = bannerSlice.actions;

export default bannerSlice.reducer;
