'use client'
import React, { useEffect } from 'react';
import styles from '../app/login/page.module.scss'
import signUp  from "@/firebase/auth/signup";
import signIn from "@/firebase/auth/signin";
import { useRouter } from 'next/navigation';
import { AuthContext } from "@/context/AuthContext";
// import { AuthContext } from "../../context/AuthContext";
import { Novu } from '@novu/node';

export default function SigninPage() {

  const [signInEmail, setSignInEmail] = React.useState('');
  const [signInPassword, setSignInPassword] = React.useState('');
  const router = useRouter()

  const handleSignIn = async (event:any) => {
    event.preventDefault()

    const { result, error } = await signIn(signInEmail, signInPassword);

    if (error) {
        return console.log(error)
    }

    // else successful
    console.log(result)
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
    <div className={`${styles.formWrapper} ${styles.isActive}`}>
      <button type="button" className={`${styles.switcher} ${styles.switcherLogin} fliper`}>
        Login
        <span className={styles.underline}></span>
      </button>
      <form className={`${styles.form} ${styles.formLogin}`} onSubmit={handleSignIn}>
        <fieldset>
          <legend>Please, enter your email and password for login.</legend>
          <div className={styles.inputBlock}>
            <label htmlFor="login-email">E-mail</label>
            {/* <input id="login-email" type="email" required /> */}
            <input onChange={(e) => setSignInEmail(e.target.value)} required type="email" name="email" id="login-email" placeholder="example@mail.com" />
          </div>
          <div className={styles.inputBlock}>
            <label htmlFor="login-password">Password</label>
            {/* <input id="login-password" type="password" required /> */}
            <input onChange={(e) => setSignInPassword(e.target.value)} required type="password" name="password" id="login-password" placeholder="password" />
          </div>
        </fieldset>
        <button type="submit" className={styles.btnLogin}>Login</button>
      </form>
  </div>
  )
}