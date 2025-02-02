import React from 'react';
import styles from './Main.module.scss';
import Sidebar from '../Sidebar';

type Props = {
  content: React.ReactNode;
};

const Main: React.FC<Props> = ({ content }) => {
  return (
    <main className={styles.main}>
      <Sidebar />
      {content}
    </main>
  );
};

export default Main;
