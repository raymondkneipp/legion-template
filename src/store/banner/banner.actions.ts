import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "@utils";

export const getBanner = createAsyncThunk("banner/getBanner", async () =>
	fetcher("banner")
);
