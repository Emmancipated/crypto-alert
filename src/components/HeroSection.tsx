import styles from '../app/page.module.scss';
import Image from 'next/image'
import hero from '../..//public/images/shubham-dhage-Sj-HVUI8zSA-unsplash_prev_ui.png';

const HeroSection = () => {
  return (
    <section className={styles.HeroSection}>
      <div className={styles.heroWrapper}>
        <h1>We watch Crypro Market</h1>
        <p>Welcome to the platform where we offer you all the 
          market rates of any crypto currency you could think of.
          Never miss any notification on current trends, bears and 
          bull runs of your favorite coins and tokens.
        </p>

        <button>Get started</button>
      </div>

      <div className="heroImageWrapper">
        <Image
          src={hero}
          alt='heroone'
          className={styles.imageStyle}
        />
      </div>

    </section>
  )
}

export default HeroSection;