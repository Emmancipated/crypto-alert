'use client'
import { AuthContext } from '@/context/AuthContext';
import React, {useEffect} from 'react';
import styles from '../app/login/page.module.scss';
import { Novu } from '@novu/node';
import { useRouter } from 'next/navigation';
import signUp from "@/firebase/auth/signup";

const novuApiKey = process.env.NOVU_API_KEY as string
const novu = new Novu(novuApiKey);

export const SignupPage: React.FC<{
  createSubscriber: (uid: string, email: string, displayName: string) => void;
}> = (props) => {
  const { createSubscriber } = props;

  const currentUser = React.useContext(AuthContext);
  const { user }  = currentUser as any;  

  const [signUpUsername, setSignUpUsername] = React.useState('');
  const [signUpEmail, setSignUpEmail] = React.useState('');
  const [signUpPassword, setSignUpPassword] = React.useState('');


  const router = useRouter()

  console.log(user);


  // createSubscriber(userId: string, email: string, username:string)

  //   console.log(userId, email, username);
    
  //     novu.subscribers.identify(userId, {
  //     email: email,
  //     firstName: username,
  //   });
  // }


  const handleSignUp  = async (event:any) => {
    event.preventDefault()

    await signUp(signUpUsername, signUpEmail, signUpPassword)

      createSubscriber(user.uid, user.email, user.displayName)
      

    // if (error) {
    //     return console.log('This is the error that occured' + error)
    // }
    // setTimeout(() => createSubscriber(user.uid, user.email, user.displayName), 3000)
    
    // createSubscriber(user.uid, user.email, user.displayName);

    // else successful
    console.log('I am the ' + user)
    return router.push("/markets")
  }
  
  useEffect(() => {
    const switchers = Array.from(document.querySelectorAll(`.fliper`));
           
    const handleSwitcherClick = (event: MouseEvent) => {
      const clickedSwitcher = event.currentTarget as HTMLElement;

      switchers.forEach((item) => item.parentElement?.classList.remove(`${styles.isActive}`));
      clickedSwitcher.parentElement?.classList.add(`${styles.isActive}`);
    };

    switchers.forEach((item:any) => {
      
      item.addEventListener('click', handleSwitcherClick);
    });

    return () => {
      switchers.forEach((item: any) => {
        item.removeEventListener('click', handleSwitcherClick);
      });
    };
  }, []);
  

  return (
    <div className={styles.formWrapper}>
      <button type="button" className={`${styles.switcher} ${styles.switcherSignup} fliper`}>
        Sign Up
        <span className={styles.underline}></span>
      </button>
      <form className={`${styles.form} ${styles.formSignup}`} onSubmit={handleSignUp}>
        <fieldset>
          <legend>Please, enter your email, password and password confirmation for sign up.</legend>
          <div className={styles.inputBlock}>
            <label htmlFor="signup-username">E-mail</label>
            <input id="signup-username" type="text" required onChange={(e) => setSignUpUsername(e.target.value)} name="username" placeholder="example@mail.com" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="signup-email">E-mail</label>
            <input id="signup-email" type="email" required onChange={(e) => setSignUpEmail(e.target.value)} name="email" placeholder="example@mail.com" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="signup-password">Password</label>
            <input id="signup-password" type="password" required onChange={(e) => setSignUpPassword(e.target.value)} name="password" placeholder="password"/>
          </div>
        </fieldset>
        <button type="submit" className={styles.btnSignup}>Continue</button>
      </form>
    </div>
  )
}
