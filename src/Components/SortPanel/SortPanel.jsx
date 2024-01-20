import styles from './SortPanel.module.scss';

function SortPanel({ sortType, setSortType }) {
  const isCheapest = sortType === 'cheapest';
  return (
    <div className={styles['container']}>
      <button
        className={`
        ${styles['sort-btn']} ${isCheapest ? styles['active-btn'] : ''}
        `}
        onClick={() => setSortType('cheapest')}
      >
        Cheapest
      </button>
      <button
        className={`
        ${styles['sort-btn']} ${!isCheapest ? styles['active-btn'] : ''}
        `}
        onClick={() => setSortType('fastest')}
      >
        Fastest
      </button>
    </div>
  );
}

export default SortPanel;
