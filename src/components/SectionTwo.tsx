import styles from '../app/page.module.scss'
import Image from 'next/image'
import Link from 'next/link';


export async function getData(type:string) {
  const res = await fetch(`http://api.coinlayer.com/api/${type}?access_key=${process.env.myAccessKey}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }
 
  return res.json();
}


interface CryptoItem {
  [item: string]: {
    symbol: string;
    name: string;
    name_full: string;
    max_supply: number;
    icon_url: string;
  };
}


const  SectionTwo = async ()  => {
  const data = await getData('list');
  const { crypto } = data as { crypto: CryptoItem };
  const cryptoKeyArray = Object.keys(crypto);
  const slicedKeyArrayOne = cryptoKeyArray.slice(0, 4);
  const slicedKeyArrayTwo = cryptoKeyArray.slice(6, 10);

  return (
    <section className={styles.sectionTwo}>
      <div className={styles.cryptoWrapper}>
        <div className={styles.cryptoHeader}>
          <h1>Live Markets</h1>
          <Link href='/markets'>More</Link>
        </div>
        <div className={styles.cryptoTitle}>
          <h4>Logo</h4>
          <h4>Name</h4>
          <h4>Volume(24h)</h4>
        </div>
        {
          slicedKeyArrayOne.map((item, i) => 
            <div key={item} className={styles.cryptoContents}>
              <div className={styles.cryptoImageContainer}>
              <span>{i + 1 }</span> 
              <Image 
                src={crypto[item].icon_url}
                alt='crypto'
                width={35}
                height={35}
              />
              </div>
                <p>{crypto[item].name}</p>
                <p>${crypto[item].max_supply.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>

            </div>
          )
        }
      </div>

      <div className={styles.cryptoWrapper}>
        <div className={styles.cryptoHeader}>
          <h1>History</h1>
          <Link href='/markets'>More</Link>
        </div>
        <div className={styles.cryptoTitle}>
          <h4>Logo</h4>
          <h4>Name</h4>
          <h4>Volume(24h)</h4>
        </div>
        {
          slicedKeyArrayTwo.map((item, i) => 
            <div key={item} className={styles.cryptoContents}>
              <div className={styles.cryptoImageContainer}>
              <span>{i + 1 }</span> 
              <Image 
                src={crypto[item].icon_url}
                alt='crypto'
                width={35}
                height={35}
              />
              </div>
                <p>{crypto[item].name}</p>
                <p>${crypto[item].max_supply.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>

            </div>
          )
        }
      </div>

    </section>    
  )
}

export default SectionTwo;
