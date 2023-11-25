import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
import { AppContainer } from "../style/Page.style";
import Loading from "../components/Loading";
import smallLoading from "../components/smallLoading";

export default function NowPlaying() {
  const [movies, setMovies] = useState([]); //movie 데이터 저장
  const [loading, setLoading] = useState(false);
  const [smallLoading, setSmallLoading] = useState(false); //loading을 결정
  const [page, setPage] = useState(1); // 보여주려고 하는 페이지
  const [isFetching, setFetching] = useState(false); //fetching을 할지 안할지 결정
  const [hasNextPage, setNextPage] = useState(true); // fetching할 페이지가 있는지 없는지 결정

  const fetchData = async (page) => {
    setFetching(true);
    //데이터 불러오기 전까지 loading
    try {
      const result = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?language=ko&page=${page}`,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWQwOGI0YzIzZWQ1NWQ0NWM5OTQzZTg1MmQ5OWE4ZSIsInN1YiI6IjY1MjM5OWI0ZWE4NGM3MDEwYzE4MWM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JOt6xCNHgNuBw2gnBkSgkMuER30G8kKGzjZmABeG-Aw",
          },
        }
      );

      if (!result.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await result.json();

      setMovies((prevMovies) => [...prevMovies, ...data.results]); //이전의 데이터에 지금 가져온 데이터까지 붙임.
      setNextPage(data.page < 500); //다음 페이지가 있는가? > true //lodaing  끝 > 데이터 출력
      setFetching(false);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  //처음 페이지 보여줄 때
  useEffect(() => {
    setLoading(true);
    fetchData(page).then(() => setLoading(false));
  }, []);

  // 만약 화면 아래에 스크롤이 닿는다면
  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight - 50;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight && !isFetching) {
      setFetching(true);
      setSmallLoading(true);
      setPage((prevPage) => prevPage + 1); //page를 변경
    }
  };
  // page가 변경되면
  useEffect(() => {
    if (isFetching && hasNextPage) {
      fetchData(page).then(() => setSmallLoading(false));
    } else if (!hasNextPage) {
    }
    setFetching(false);
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AppContainer>
      {loading ? (
        <Loading />
      ) : (
        <AppContainer>
          {smallLoading ? (
            <smallLoading />
          ) : (
            movies.map((item) => (
              <Movie
                key={item.id}
                title={item.title}
                poster_path={item.poster_path}
                vote_average={item.vote_average}
                overview={item.overview}
                movieId={item.id}
              />
            ))
          )}
        </AppContainer>
      )}
    </AppContainer>
  );
}
