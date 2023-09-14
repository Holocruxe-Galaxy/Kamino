import styles from '../../components/Waitlist/waitlist.module.css';
// import Waitlist from '../../components/Waitlist/waitlist2';
import Waitlist from '../../components/Waitlist/waitlist';



const WaitlistView = () => {
  return (
    <section id="waitlist" className={styles.waitlist}>
        <Waitlist />
    </section>
  );
};

export default WaitlistView;
