import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher } from "@utils";

export const getPostData = createAsyncThunk("postId/getPostData", async () =>
	fetcher("")
);
