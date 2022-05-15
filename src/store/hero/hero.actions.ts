import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "@utils";

export const getHero = createAsyncThunk("hero/getHero", async () =>
	fetcher("hero")
);
