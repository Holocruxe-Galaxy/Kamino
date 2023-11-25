import { useEffect, useState } from 'react';
import styles from './scrollToTop.module.css';

import Circle from '../../icons/circle2.svg';
import arrow from '../../icons/Arrow.svg';

const ScrollToTop = () => {
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setDisplay(window.scrollY > 400);
    });
  }, []);

  return (
    <>
      {display && (
        <div className={styles.container}>
          <a href="#" className={styles.top}>
            <img src={Circle} alt="circle" className={styles.circle} />
            <img src={arrow} alt="arrow up" className={styles.arrow} />
          </a>
        </div>
      )}
    </>
  );
};

export default ScrollToTop;
