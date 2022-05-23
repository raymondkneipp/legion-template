import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetcher, patcher } from "@utils";

export const getPostData = createAsyncThunk("post/getPostData", async () =>
	fetcher("")
);

export const updatePostData = createAsyncThunk(
	"post/updatePostData",
	async (name: string) => patcher("", { name })
);
