import { useCallback, useEffect, useMemo, useState } from 'react';
import SortPanel from '../SortPanel/SortPanel';
import Ticket from '../Ticket/Ticket';
import FilterPanel from '../FilterPanel/FilterPanel';
import TicketDetails from '../TicketDetails/TicketDetails';
import Spinner from '../Spinner/Spinner';
import logoSrc from '../../assets/airplane.png';
import { fetchTickets } from '../../api';
import { convertTimePeriodToMinutes } from '../../helpers';
import styles from './App.module.scss';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tickets, setTickets] = useState([]);
  const [modalInfo, setModalInfo] = useState({
    isActive: false,
    currentTicket: null,
  });
  const [sortType, setSortType] = useState('cheapest');
  const [filters, setFilters] = useState({
    all: true,
    noTransfers: false,
    oneTransfer: false,
    twoTransfers: false,
    threeTransfers: false,
  });

  useEffect(() => {
    fetchTickets().then((res) => {
      setIsLoading(false);
      setTickets(res ?? []);
    });
  }, []);

  const closeModal = () => setModalInfo({ isActive: false, ticket: null });
  const openModal = (e) => {
    const ticketId = e.currentTarget.id;
    const ticket = tickets.find((item) => item.id === ticketId);
    setModalInfo({ isActive: true, currentTicket: ticket });
  };

  const sortTickets = useCallback(() => {
    if (!tickets) {
      return [];
    }

    const ticketsCopy = [...tickets];
    return ticketsCopy.sort((a, b) => {
      let valueA =
        sortType === 'cheapest'
          ? Number(a.price.total)
          : convertTimePeriodToMinutes(a.itineraries[0].duration);

      let valueB =
        sortType === 'cheapest'
          ? Number(b.price.total)
          : convertTimePeriodToMinutes(b.itineraries[0].duration);

      return valueA - valueB;
    });
  }, [sortType, tickets]);

  const filteredTickets = useMemo(() => {
    const sortedTickets = sortTickets();

    return sortedTickets.filter((ticket) => {
      const numberOfTransfers = ticket.itineraries[0].segments.length - 1;

      if (filters.all) return true;
      if (filters.noTransfers && numberOfTransfers === 0) return true;
      if (filters.oneTransfer && numberOfTransfers === 1) return true;
      if (filters.twoTransfers && numberOfTransfers === 2) return true;
      if (filters.threeTransfers && numberOfTransfers === 3) return true;

      return false;
    });
  }, [filters, sortTickets]);

  return (
    <div className={styles['app']}>
      <div className={styles['logo']}>
        <img src={logoSrc} alt="airplane" />
      </div>
      <div className={styles['container']}>
        <div>
          <FilterPanel filters={filters} setFilters={setFilters} />
        </div>
        <div>
          <SortPanel sortType={sortType} setSortType={setSortType} />
          {isLoading ? (
            <Spinner />
          ) : (
            filteredTickets.map((ticket) => (
              <Ticket key={ticket.id} ticket={ticket} openDetails={openModal} />
            ))
          )}
        </div>
      </div>
      <TicketDetails closeModal={closeModal} modalInfo={modalInfo} />
    </div>
  );
}

export default App;
