import styles from './TicketDetails.module.scss';

function TicketDetails({ closeModal, modalInfo }) {
  const { isActive, currentTicket: ticketDetails } = modalInfo;

  const activeClass = isActive ? 'active' : '';
  return (
    <div
      className={`${styles['container']} ${styles[activeClass]}`}
      onClick={closeModal}
    >
      <div
        className={`${styles['modal']} ${styles[activeClass]}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={styles['modal-header']}>
          <button className={styles['modal-close']} onClick={closeModal}>
            X
          </button>
          <h3 className={styles['modal-title']}>Ticket details</h3>
        </div>
        {ticketDetails && (
          <ul className={styles['list-details']}>
            <li className={styles['list-details-item']}>
              Ticket type:{' '}
              <span>
                {
                  ticketDetails.travelerPricings[0].fareDetailsBySegment[0]
                    .cabin
                }
              </span>
            </li>
            <li className={styles['list-details-item']}>
              Ticket plan:{' '}
              <span>{ticketDetails.travelerPricings[0].fareOption}</span>
            </li>
            <li className={styles['list-details-item']}>
              Passenger:{' '}
              <span>{ticketDetails.travelerPricings[0].travelerType}</span>
            </li>
            <li className={styles['list-details-item']}>
              Amount of checked baggage:{' '}
              <span>
                {
                  ticketDetails.travelerPricings[0].fareDetailsBySegment[0]
                    .includedCheckedBags.quantity
                }
              </span>
            </li>
            <li className={styles['list-details-item']}>
              Number of booked seats:{' '}
              <span>{ticketDetails.numberOfBookableSeats}</span>
            </li>
            <li className={styles['list-details-item']}>
              Return ticket: <span>{ticketDetails.oneWay ? 'yes' : 'no'}</span>
            </li>
          </ul>
        )}
        {!ticketDetails && <div>No information about ticket</div>}
      </div>
    </div>
  );
}

export default TicketDetails;
