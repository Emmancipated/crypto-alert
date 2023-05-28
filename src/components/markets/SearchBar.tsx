import styles from '../../app/markets/page.module.scss';

export default function SearchBar() {
  return (
    <section className={styles.SearchBar}>
      <div className={styles.searchBarContainer}>
        
            <input type="text" name="search" id="search" placeholder='search for crypto'/>
          <button type="submit">Search</button>
      </div>
    </section>
  )
}