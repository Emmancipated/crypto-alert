import Header from "@/components/Header";
import SearchBar from "@/components/markets/SearchBar";
import { getData } from "@/components/SectionTwo";
import Image from 'next/image';
import styles from '../markets/page.module.scss';
import SelectRate from "./SelectRate";

interface CryptoItem {
  [item: string]: {
    symbol: string;
    name: string;
    name_full: string;
    max_supply: number;
    icon_url: string;
  };
}

export interface CryptoRates {
  [item: string] :number
}

export default async function Markets() {
  const data = await getData('list');
  const rateData = await getData('live');
  const { crypto } = data as { crypto: CryptoItem };
  const { rates } = rateData as { rates: CryptoRates };
  const cryptoKeyArray = Object.keys(crypto);  
  

  // http://api.coinlayer.com/2018-04-30
  //   ? access_key = 641273a35bbfdc101b67935df4611bb5
  
  return (
    <main className={styles.Markets}>
      <Header />
      {/* <HeroSection />
      <SectionOne /> */}

      <SearchBar />

      <div className={styles.marketsContainer}>
      <div className={styles.mcryptoWrapper}>

        <div className={styles.mcryptoTitle}>
          <h4 className={styles.cryptoImageHeader}>Logo</h4>
          <h4>Name</h4>
          <h4>Volume(24h)</h4>
          <h4>Price(1h)</h4>
          <h4>Get notified</h4>
        </div>

        <div>    
        {
          cryptoKeyArray.map((item, i) => 
            <div key={item} className={styles.mcryptoContents}>

              <div className={styles.cryptoImageContainer}>
              <Image 
                src={crypto[item].icon_url}
                alt='crypto'
                width={35}
                height={35}
              />
              <span
                style={{ cursor: 'pointer', }}
                // onClick={handleStarClick}
              >
                &#9733;
              </span>

              <span>{i + 1}</span> 
              </div>
                <p>{crypto[item].name}</p>
                <p>${crypto[item].max_supply.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                {/* <p>${crypto[item].max_supply.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p> */}
                <p>${rates[item]}</p>
                {/* <div className={styles.mcryptoNoticeWrapper}>
                  <input type={"text"} defaultValue={rates[item]}/>
                  <div className={styles.mcryptoNoticeSubmit}>
                    <input type="submit" value="Below" />
                    <input type="submit" value="Above" />
                  </div>
                </div> */}
                <SelectRate 
                  rates={rates}
                  item={item}
                />
                {/* <div className={styles.mcryptoNoticeWrapper}>
                  <input type="submit" value="Below" />
                  <input type={"text"} defaultValue={rates[item]}/>
                  <input type="submit" value="Above" />
                </div> */}
                {/* <p>${crypto[item].max_supply.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p>${crypto[item].max_supply.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
                <p>${crypto[item].max_supply.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p> */}
             
            </div>
          )
        }
        </div>
      </div>
      </div>


      {/* <div key={item} className={styles.cryptoContents}>
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

            </div> */}


      {/* <div className={styles.cryptoWrapper}>
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
          cryptoKeyArray.map((item, i) => 
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
      </div> */}

    </main>
  )
}








// Firebase ConFig


// npm install firebase

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyB7AZsiSrtRWnzqcJpIfFDu4--ZDaAOCw8",
//   authDomain: "crypto-alert-a7a98.firebaseapp.com",
//   projectId: "crypto-alert-a7a98",
//   storageBucket: "crypto-alert-a7a98.appspot.com",
//   messagingSenderId: "717341528347",
//   appId: "1:717341528347:web:eca928d7faa5bb6cf2c3be",
//   measurementId: "G-BWEFPXR28D"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);