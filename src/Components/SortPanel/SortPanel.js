import styles from './SortPanel.module.scss';

function SortPanel() {
  return (
    <div className={styles['container']}>
      <button className={`${styles['sort-btn']} ${styles['active-btn']}`}>
        Самый дешевый
      </button>
      <button className={`${styles['sort-btn']}`}>Самый быстрый</button>
    </div>
  );
}

export default SortPanel;
