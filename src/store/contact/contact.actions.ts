import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "@utils";

export const getContact = createAsyncThunk("contact/getContact", async () =>
	fetcher("contact")
);
