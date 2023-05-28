'use client'
import React from "react";
import Link from "next/link";
import { AuthContext } from "@/context/AuthContext";
import signout from "@/firebase/auth/signout";
import { Novu } from '@novu/node';
import styles from '../app/page.module.scss';

export default function CurrentUser() {
  const currentUser = React.useContext(AuthContext);
  const { user }  = currentUser as any;

  const novuApiKey = process.env.NOVU_API_KEY as string
  const novu = new Novu(novuApiKey);

  return (
    <div className={styles.showLogin}>
      {user !== null ? <p>{user.displayName} <button onClick={signout}>logout</button></p> : <li><Link href={'/login'}>Login</Link></li>}

    </div>
  )
}