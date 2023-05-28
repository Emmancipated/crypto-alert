
'use client'
// import { useAuthContext } from "@/context/AuthContext";
import styles from '../markets/page.module.scss';
import {CryptoRates} from '../markets/page';
import { useState } from 'react';
import addData from '@/firebase/firestore/addData';

interface Props {
  rates: CryptoRates;
  item: string;
}

export default function SelectRate(props: Props) {
  const { rates, item } = props;
  const [rate, setRate] = useState('');

  const handleChange = (e:any) => {
    setRate(e)
    console.log(rate);
    
  }

  const submitHigher = () => {
    addData('crypto', 'rates', {rate: rate});    
  }

  return (
    <div className={styles.mcryptoNoticeWrapper}>
      <input type="submit" value="Below" />
      <input type={"text"} defaultValue={rates[item]} onChange={(e) => handleChange(e.target.value)}/>
      <input type="submit" value="Above" onClick={submitHigher}/>
  </div>
  )
}