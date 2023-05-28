// import React from "react";
// import signUp from "@/firebase/auth/signup";
// import signIn from "@/firebase/auth/signin";
// import { useRouter } from 'next/navigation';
import styles from './page.module.scss';
// import { AuthContext } from "@/context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";
import { Novu } from '@novu/node';
import {SignupPage} from "@/components/SignupPage";
import SigninPage from "@/components/SigninPage";
import Header from "@/components/Header";
import { createSubscriber } from "@/notifications/novuSetup";
// import signUp from "@/firebase/auth/signup";



export default function Login() {

    // const [signUpUsername, setSignUpUsername] = React.useState('');
    // const [signUpEmail, setSignUpEmail] = React.useState('');
    // const [signUpPassword, setSignUpPassword] = React.useState('');
    // const [signInEmail, setSignInEmail] = React.useState('');
    // const [signInPassword, setSignInPassword] = React.useState('');

    const novuApiKey = process.env.NOVU_API_KEY as string
    const novu = new Novu(novuApiKey);
    
    // const handleSignUp = async (event:any) => {
    //     event.preventDefault()

    //     const { result, error } = await signUp(signUpEmail, signUpPassword);

    //     if (error) {
    //         return console.log('This is the error that occured' + error)
    //     }

    //     // else successful
    //     console.log('I am the ' + result)
    //     return router.push("/markets")
    // }

    // const createSubscriber = async (userId: string, email: string, username:string) => {
    //   await novu.subscribers.identify(userId, {
    //     email: email,
    //     firstName: username,

    //   });
    // }

  //   const handleSignUp = async (event:any) => {
  //     event.preventDefault()

  //     const user =  signUp(signUpUsername, signUpEmail, signUpPassword);

  //     // if (error) {
  //     //     return console.log('This is the error that occured' + error)
  //     // }
    
  //     createSubscriber(signedUpUser.uid, signedUpUser.email, signedUpUser.displayName);

  //     // else successful
  //     console.log('I am the ' + user)
  //     return router.push("/markets")
  // }

  //   const handleSignIn = async (event:any) => {
  //     event.preventDefault()

  //     const { result, error } = await signIn(signInEmail, signInPassword);

  //     if (error) {
  //         return console.log(error)
  //     }

  //     // else successful
  //     console.log(result)
  //     return router.push("/markets")
  // }

    // useEffect(() => {
    //   const switchers = Array.from(document.querySelectorAll(`.fliper`));
             
    //   const handleSwitcherClick = (event: MouseEvent) => {
    //     const clickedSwitcher = event.currentTarget as HTMLElement;
  
    //     switchers.forEach((item) => item.parentElement?.classList.remove(`${styles.isActive}`));
    //     clickedSwitcher.parentElement?.classList.add(`${styles.isActive}`);
    //   };
  
    //   switchers.forEach((item:any) => {
        
    //     item.addEventListener('click', handleSwitcherClick);
    //   });
  
    //   return () => {
    //     switchers.forEach((item: any) => {
    //       item.removeEventListener('click', handleSwitcherClick);
    //     });
    //   };
    // }, []);





    return (
      <>
      <Header />
    <section className={styles.Login}>
    <div className={styles.formsSection}>
      <h1 className={styles.sectionTitle}>Animated Forms</h1>
      <div className={styles.forms}>

      <SigninPage />


      {/* Space for SignUp */}
      <SignupPage createSubscriber={createSubscriber}/>
    </div>
    </div>
    </section>
    </>
    );
}
