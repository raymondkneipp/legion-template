import { createSlice } from "@reduxjs/toolkit";
import { getTheme } from "./theme.actions.ts";

export enum Color {
	Red = "red",
	Orange = "orange",
	Amber = "amber",
	Yellow = "yellow",
	Lime = "lime",
	Green = "green",
	Emerald = "emerald",
	Teal = "teal",
	Cyan = "cyan",
	Sky = "sky",
	Blue = "blue",
	Indigo = "indigo",
	Violet = "violet",
	Purple = "purple",
}

export enum Radius {
	None = "rounded-none",
	Small = "rounded-sm",
	Default = "rounded",
	Medium = "rounded-md",
	Large = "rounded-lg",
	XL = "rounded-xl",
	XXL = "rounded-2xl",
	XXXL = "rounded-3xl",
}

export interface ThemeState {
	color: Color;
	radius: Radius;
}

const initialState: ThemeState = {
	color: Color.Red,
	radius: Radius.XXXL,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getTheme.fulfilled, (state, action) => {
			state.color = action.payload.color;
			state.radius = action.payload.radius;
		});
	},
});

// export const {} = themeSlice.actions;

export default themeSlice.reducer;
