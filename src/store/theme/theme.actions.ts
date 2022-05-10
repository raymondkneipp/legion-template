import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "@utils";

export const getTheme = createAsyncThunk("theme/getTheme", async () =>
	fetcher("theme")
);
