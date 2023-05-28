import firebase_app from "../config";
import { getAuth, signOut } from "firebase/auth";
// import { useRouter } from "next/router";



const auth = getAuth(firebase_app);

export default async function signout() {
  // const router = useRouter()
  signOut(auth).then(() => {
    //  return router.push("/")
    return 'logout successful'
  }).catch((error) => {
    return `an error occurred: ${error}`;
  })
}