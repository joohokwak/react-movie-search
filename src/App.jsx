import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import MovieList from './components/MovieList';
import MovieSearch from './components/MovieSearch';
import MovieTab from './components/MovieTab';
import Pagination from './components/Pagination';

const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=5899706e';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('frozen');
  const [type, setType] = useState('');
  const [page, setPage] = useState(1);
  // const [totalPage, setTotalPage] = useState(0);
  const totalPage = useRef(0);

  useEffect(() => {
    // async: 프라미스를 리턴하는 함수에 사용가능
    (async () => {
      // await: 비동기동작을 동기적으로 실행되게함
      const response = await fetch(`${API_URL}&s=${title}&type=${type}&page=${page}`);
      // js객체로 변환
      const data = await response.json();
      // 년도기준 내림차순 정렬
      // 속성명? 붙이면 undefined, null인 경우 뒤의 메서드 실행안함
      const sortData = data.Search?.sort((a, b) => b.Year - a.Year);
      setMovies(sortData);
      // 총페이지 개수
      // setTotalPage(Math.ceil(data.totalResults / 10));
      totalPage.current = Math.ceil(data.totalResults / 10);
    })();
  }, [title, type, page]);

  return (
    <div className="app">
      <h2>MovieLand</h2>
      <MovieSearch setType={setType} setTitle={setTitle} setPage={setPage} />
      <MovieTab setType={setType} type={type} setPage={setPage} />
      <MovieList movies={movies} />
      {movies && <Pagination page={page} setPage={setPage} totalPage={totalPage.current} limit={4} />}
    </div>
  );
}
