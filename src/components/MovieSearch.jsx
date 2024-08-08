import React, { useEffect, useRef } from 'react';
import styles from './MovieSearch.module.css';

export default function MovieSearch({ setTitle, setType, setPage }) {
  const inputRef = useRef();

  function handleSearch() {
    let txt = inputRef.current.value;
    setType('');
    setPage(1);
    setTitle(txt || 'frozen');
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className={styles.movie_search}>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          ref={inputRef}
          placeholder="제목검색"
          title="제목검색"
          onKeyUp={(e) => {
            if (e.key === 'Enter') handleSearch();
          }}
        />
        <button onClick={handleSearch}>검색</button>
      </form>
    </div>
  );
}
