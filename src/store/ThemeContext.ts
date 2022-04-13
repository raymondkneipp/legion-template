import { createContext, useContext } from "react";

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

export type ThemeContextType = {
	color: Color;
	radius: Radius;
};

export const ThemeContext = createContext<ThemeContextType>({
	color: Color.Sky,
	radius: Radius.Default,
});

export const useTheme = () => useContext(ThemeContext);
