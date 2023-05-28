// 'use client';
import firebase_app from "../config";
import { createUserWithEmailAndPassword, getAuth, updateProfile, } from "firebase/auth";
import { Novu } from "@novu/node";
import  GetNovu from '../../notifications/novuSetup'

const novuApiKey = process.env.NOVU_API_KEY as string
const novu = new Novu(novuApiKey);
const auth = getAuth(firebase_app);


// export default async function signUp(email: string, password: string) {
//     let result = null,
//         error = null;
//     try {
//         result = await createUserWithEmailAndPassword(auth, email, password);
//         console.log("The result is " + result);
        
//     } catch (e) {
//         error = e;
//         console.log("while the error is " + error);
        
//     }

//     return { result, error };
// }


export default async function signUp(username: string, email: string, password: string) {
  
  createUserWithEmailAndPassword(auth, email, password)
    .then(({ user }) => {
      updateProfile(user, { displayName: username });
      console.log(user);

    })
    .catch(console.log)
    .finally(() => {
      // setLoading(false);
      // setAuthenticating(false)
      console.log("All done")
      
    })
}

// export const getUser = getAuth(firebase_app).onAuthStateChanged(user => { 
//   if(user) {
//   console.log(user.uid)
//   console.log(user.displayName)
//   console.log(user.email)  }
//   return user?.displayName;
// })