import React, { useEffect, useMemo, useState } from 'react';
import { sliceArrayByLimit } from '../lib/utils';
import styles from './Pagination.module.css';

export default function Pagination({ page, setPage, totalPage, limit }) {
  const [currentPageArr, setCurrentPageArr] = useState([]);
  const [totalPageArr, setTotalPageArr] = useState([]);

  // 렌더링과 관계없이 totalPage가 변경되면 실행
  useMemo(() => {
    const pageGroup = sliceArrayByLimit(totalPage, limit);
    setTotalPageArr(pageGroup);
    setCurrentPageArr(pageGroup[0]);
  }, [totalPage]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPageArr(totalPageArr[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPageArr(totalPageArr[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  return (
    <div className={styles.pagination}>
      {page > 1 && (
        <button type="button" onClick={() => setPage(page - 1)}>
          이전
        </button>
      )}
      {currentPageArr?.map((num) => (
        <button type="button" key={num} onClick={() => setPage(num)} className={page === num ? styles.active : ''}>
          {num}
        </button>
      ))}
      {page < totalPage && (
        <button type="button" onClick={() => setPage(page + 1)}>
          다음
        </button>
      )}
    </div>
  );
}
