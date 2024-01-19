import logoSrc from '../../assets/airplane.png';
import styles from './Ticket.module.scss';

function Ticket({openDetails}) {
  return (
    <div className={styles['container']} onClick={openDetails}>
      <div className={styles['header']}>
        <h3>13 400 Р</h3>
        <img src={logoSrc} alt="company-logo" />
      </div>
      <ul className={styles['ticket-info-list']}>
        <li className={styles['ticket-info-item']}>
          <span>MOW - HKT</span>
          <span>10:45 - 08:00</span>
        </li>
        <li className={styles['ticket-info-item']}>
          <span>В пути</span>
          <span>21ч 15м</span>
        </li>
        <li className={styles['ticket-info-item']}>
          <span>N пересадок</span>
          <span>HKG, JNB</span>
        </li>
      </ul>
    </div>
  );
}

export default Ticket;
