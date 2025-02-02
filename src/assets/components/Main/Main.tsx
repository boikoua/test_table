import React from 'react';
import Sidebar from '../Sidebar';
import styles from './Main.module.scss';

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
