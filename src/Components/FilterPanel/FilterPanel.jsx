import styles from './FilterPanel.module.scss';

function FilterPanel({ filters, setFilters }) {
  const handleChange = (name) => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [name]: !prevFilters[name],
      };
    });
  };

  return (
    <div className={styles['container']}>
      <h3 className={styles['header']}>Number of transfers</h3>
      <div>
        <label className={styles['checkbox']}>
          <input
            name={'all'}
            type="checkbox"
            checked={filters['all']}
            onChange={() => handleChange('all')}
          />
          <span>All</span>
        </label>
        <label className={styles['checkbox']}>
          <input
            name={'noTransfers'}
            type="checkbox"
            checked={filters['noTransfers']}
            onChange={() => handleChange('noTransfers')}
          />
          <span>Without transfers</span>
        </label>
        <label className={styles['checkbox']}>
          <input
            name={'oneTransfer'}
            type="checkbox"
            checked={filters['oneTransfer']}
            onChange={() => handleChange('oneTransfer')}
          />
          <span>1 transfer</span>
        </label>
        <label className={styles['checkbox']}>
          <input
            name={'twoTransfers'}
            type="checkbox"
            checked={filters['twoTransfers']}
            onChange={() => handleChange('twoTransfers')}
          />
          <span>2 transfers</span>
        </label>
        <label className={styles['checkbox']}>
          <input
            name={'threeTransfers'}
            type="checkbox"
            checked={filters['threeTransfers']}
            onChange={() => handleChange('threeTransfers')}
          />
          <span>3 transfers</span>
        </label>
      </div>
    </div>
  );
}

export default FilterPanel;
