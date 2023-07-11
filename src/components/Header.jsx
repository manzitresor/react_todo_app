import React from 'react';
import styles from '../styles/Header.module.css';

const Header = () => {
  const headerStyle = {
    padding: '20px 0',
    lineHeight: '1.5em',
    color: '#aeadad',
    textAlign: 'center',
    marginTop: 20,
  };
  return (
    <>
      <div className="wrapper">
        <header style={headerStyle} className={styles.header}>
          <h1>ToDos</h1>
          <p>Items will persist in the browser local storage</p>
        </header>
      </div>

    </>
  );
};

export default Header;
