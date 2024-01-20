import {
  formatTimePeriod,
  formatTimeStamp,
  formatPrice,
} from '../../helpers';
import logoSrc from '../../assets/airplane.png';
import styles from './Ticket.module.scss';

function Ticket({ ticket, openDetails }) {
  const { id, itineraries, price } = ticket;
  const { duration, segments } = itineraries[0];
  const { total, currency } = price;

  const departure = segments[0].departure;
  const arrival = segments[segments.length - 1].arrival;
  const transfers = segments
    .map((segment) => segment.arrival.iataCode)
    .slice(0, segments.length - 1)
    .join(', ');

  return (
    <div className={styles['container']} id={id} onClick={openDetails}>
      <div className={styles['header']}>
        <h3>{formatPrice(total, currency)}</h3>
        <img src={logoSrc} alt="company-logo" />
      </div>
      <ul className={styles['ticket-info-list']}>
        <li className={styles['ticket-info-item']}>
          <span>
            {departure.iataCode} - {arrival.iataCode}
          </span>
          <span>
            {formatTimeStamp(departure.at)} -{' '}
            {formatTimeStamp(arrival.at)}
          </span>
        </li>
        <li className={styles['ticket-info-item']}>
          <span>Duration</span>
          <span>{formatTimePeriod(duration)}</span>
        </li>
        <li className={styles['ticket-info-item']}>
          <span>{segments.length - 1} transfers</span>
          <span>{transfers}</span>
        </li>
      </ul>
    </div>
  );
}

export default Ticket;
