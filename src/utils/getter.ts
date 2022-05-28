import { store } from "@store";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@utils";

const getter = async (collection: string, rejectWithValue: any) => {
	const docRef = doc(db, collection, store.getState().post.id);
	const docSnap = await getDoc(docRef);

	if (docSnap.exists()) {
		return JSON.parse(JSON.stringify(docSnap.data()));
	} else {
		return rejectWithValue(`${collection} data not found`);
	}
};

export default getter;
