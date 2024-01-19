import { useState } from 'react';
import SortPanel from '../SortPanel/SortPanel';
import Ticket from '../Ticket/Ticket';
import FilterPanel from '../FilterPanel/FilterPanel';
import TicketDetails from '../TicketDetails/TicketDetails';
import logoSrc from '../../assets/airplane.png';
import styles from './App.module.scss';

function App() {
  const [isModalActive, setIsModalActive] = useState(false);

  const closeModal = () => setIsModalActive(false);
  const openModal = () => setIsModalActive(true);

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
          <Ticket openDetails={openModal} />
          <Ticket openDetails={openModal} />
          <Ticket openDetails={openModal} />
        </div>
      </div>
      <TicketDetails
        closeModal={closeModal}
        isActive={isModalActive}
      ></TicketDetails>
    </div>
  );
}

export default App;
