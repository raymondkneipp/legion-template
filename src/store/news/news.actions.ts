import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "@utils";

export const getNews = createAsyncThunk("news/getNews", async () =>
	fetcher("news")
);
