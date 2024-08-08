import React from 'react';
import styles from './MovieTab.module.css';

const types = ['All', 'Movie', 'Series', 'Episode'];

export default function MovieTab({ setType, type, setPage }) {
  const tmp = type || 'All';

  function handleType(idx) {
    let typeName = types[idx];
    if (idx === 0) typeName = '';

    setType(typeName);
    setPage(1);
  }

  return (
    <div className={styles.movie_tab}>
      {types.map((t, i) => (
        <button type="button" key={t} onClick={() => handleType(i)} className={tmp === t ? styles.active : ''}>
          {t}
        </button>
      ))}
    </div>
  );
}
