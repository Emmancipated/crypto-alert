import styles from '../app/page.module.scss'
import hero from '../../public/images/heroone.png'
import Image from 'next/image';

const SectionOne = () => {
  return (
    <section className={styles.sectionOne}>
      <Image
        src={hero}
        alt='hero'
        className={styles.imageStyle}
      />
    </section>
  )
}

export default SectionOne;