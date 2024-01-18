import styles from './FilterPanel.module.scss';

function FilterPanel() {
  return (
    <div className={styles['container']}>
      <h3 className={styles['header']}>Количество пересадок</h3>
      <div>
        <label className={styles['checkbox']}>
          <input type="checkbox"/>
          <span>Все</span>
        </label>
        <label className={styles['checkbox']}>
          <input type="checkbox"/>
          <span>Без пересадок</span>
        </label>
        <label className={styles['checkbox']}>
          <input type="checkbox"/>
          <span>1 пересадка</span>
        </label>
        <label className={styles['checkbox']}>
          <input type="checkbox"/>
          <span>2 пересадки</span>
        </label>
        <label className={styles['checkbox']}>
          <input type="checkbox"/>
          <span>3 пересадки</span>
        </label>
      </div>
    </div>
  );
}

export default FilterPanel;
