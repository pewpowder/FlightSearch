import styles from './TicketDetails.module.scss';

function TicketDetails({ isActive, closeModal, children }) {

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
        <ul className={styles['list-details']}>
          <li className={styles['list-details-item']}>First</li>
          <li className={styles['list-details-item']}>Second</li>
          <li className={styles['list-details-item']}>Third</li>
          <li className={styles['list-details-item']}>Fourth</li>
          <li className={styles['list-details-item']}>Fifth</li>
        </ul>
      </div>
    </div>
  );
}

export default TicketDetails;
