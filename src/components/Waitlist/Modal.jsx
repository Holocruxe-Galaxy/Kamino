import Modal from 'react-modal';
import robot from '../../img/robot';
import styles from './modal.module.css';

const WaitlistModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Congratulations Modal"
      className={styles.container}
    >
      <div className={styles.modal}>
        <img className={styles.img} src={robot.cohete} alt="cohete" />
        <p className={styles.bold}>
          CONGRATULATIONS! YOU ARE ALREADY ON BOARD!
        </p>
        <p className={styles.small}>
          Thank you for signing up!
        </p>
        <div className={styles.btn}>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </Modal>
  );
};

export default WaitlistModal;
