import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

interface DataInput {
  collection: string;
  id: string;
  data: string
}

const db = getFirestore(firebase_app)
export default async function addData(collection:any , id:any, data:any) {
    let result = null;
    let error = null;

    try {
        result = await setDoc(doc(db, collection, id), data, {
            merge: true,
        });
    } catch (e) {
        error = e;
    }

    console.log(data, result);
    
    return { result, error };
}