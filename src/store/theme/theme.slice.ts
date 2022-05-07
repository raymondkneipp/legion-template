import { createSlice } from "@reduxjs/toolkit";

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
	color: Color.Sky,
	radius: Radius.Large,
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		dummy: (state) => {
			state.color = state.color;
		},
	},
});

export const { dummy } = themeSlice.actions;

export default themeSlice.reducer;
