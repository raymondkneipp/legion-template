import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import bannerReducer from "./banner/banner.slice";
import themeReducer from "./theme/theme.slice";
import postReducer from "./post/post.slice";

export const store = configureStore({
	reducer: {
		banner: bannerReducer,
		theme: themeReducer,
		post: postReducer,
	},
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
