import { configureStore, combineReducers, AnyAction } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import bannerReducer from "./banner/banner.slice";
import themeReducer from "./theme/theme.slice";
import postReducer from "./post/post.slice";
import heroReducer from "./hero/hero.slice";
import newsReducer from "./news/news.slice";
import contactReducer from "./contact/contact.slice";

const combinedReducer = combineReducers({
	banner: bannerReducer,
	theme: themeReducer,
	post: postReducer,
	hero: heroReducer,
	news: newsReducer,
	contact: contactReducer,
});

const reducer = (state: ReturnType<any>, action: AnyAction) => {
	if (action.type === HYDRATE) {
		return {
			...state,
			...action.payload,
		};
	}
	return combinedReducer(state, action);
};

let store: any;

export const makeStore = () => {
	store = configureStore({
		reducer,
	});
	return store;
};

export { store };

type AppStore = ReturnType<typeof makeStore>;
type RootState = ReturnType<AppStore["getState"]>;
type AppDispatch = any;

export const wrapper = createWrapper<AppStore>(makeStore);

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
