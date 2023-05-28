import { headers } from 'next/dist/client/components/headers';
import styles from '../app/page.module.scss';
import Image from 'next/image'
import logo from '../../public/logo/mylogo.png'
import Link from 'next/link';
import {AuthContext} from "@/context/AuthContext"
import CurrentUser from './CurrentUser';
import { Novu } from '@novu/node';
import { createSubscriber } from '@/notifications/novuSetup';

interface Navlinks {
  name: string;
  link: string;
}
const navLink: Navlinks[] = [
  {name: 'Home', link: '/'},
  {name: 'Markets', link: '/markets'},
  {name: 'Starred', link: '/login'},
  {name: 'History', link: '/history'},
] 
// 3c08a4

const Header = () => {
  
  const novuApiKey = process.env.NOVU_API_KEY as string
  const novu = new Novu(novuApiKey);

  return (
    <section className={styles.HeaderPage}>
      <nav className={styles.headerWrap}>
        <div className={styles.logoWrapper}>
           <Image 
           src={logo} 
           alt="logo" 
           className={styles.mylogo}
           />

          <div className={styles.loginSmallscreen}>
            <CurrentUser />
            {/* <button onClick={addNoti}>Another Novu</button> */}
        </div>
        </div>

        <ul className={styles.ul}>
          {
            navLink.map((item) => <li key={item.name}><Link href={item.link} >{item.name}</Link></li>)
          }
        </ul>
      </nav>
    </section>
  )
}

export default Header;