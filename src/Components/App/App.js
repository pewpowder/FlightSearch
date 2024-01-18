import SortPanel from '../SortPanel/SortPanel';
import Ticket from '../Ticket/Ticket';
import FilterPanel from '../FilterPanel/FilterPanel';
import logoSrc from '../../assets/airplane.png';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles['app']}>
      <div className={styles['logo']}>
        <img src={logoSrc} alt="airplane" />
      </div>
      <div className={styles['container']}>
        <div>
          <FilterPanel />
        </div>
        <div>
          <SortPanel />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
          <Ticket />
        </div>
      </div>
    </div>
  );
}

export default App;
