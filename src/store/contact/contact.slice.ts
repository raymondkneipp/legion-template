import { createSlice } from "@reduxjs/toolkit";
import { getContact } from "./contact.actions";

export interface ContactState {
	content: string;
	phone: string;
	email: string;
	address: {
		street: string;
		city: string;
		state: string;
		zip: string;
	};
}

const initialState: ContactState = {
	content: "",
	phone: "",
	email: "",
	address: {
		street: "",
		city: "",
		state: "",
		zip: "",
	},
};

export const contactSlice = createSlice({
	name: "contact",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getContact.fulfilled, (state, action) => {
			state.content = action.payload.content;
			state.phone = action.payload.phone;
			state.email = action.payload.email;
			state.address = action.payload.address;
		});
	},
});

//export const {} = contactSlice.actions;

export default contactSlice.reducer;
