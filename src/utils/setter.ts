import { doc, updateDoc } from "firebase/firestore";
import { store } from "@store";
import { db, getter } from "@utils";

const setter = async (
	collection: string,
	updatedData: object,
	rejectWithValue: any
) => {
	const docRef = doc(db, collection, store.getState().post.id);

	await updateDoc(docRef, updatedData);

	return getter(collection, rejectWithValue);
};

export default setter;
