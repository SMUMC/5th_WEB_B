// Nowplaying.js
import React, { useEffect, useState } from 'react';
import ReuseNowplaying from './reusenowplaying';
import styled from 'styled-components';

function Nowplaying() {
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const apiUrlNowplaying = `https://api.themoviedb.org/3/movie/now_playing?language=ko-KR&page=${currentPage}`;

  const updateTotalPages = (pages) => {
    setTotalPages(pages);
  };

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10 && !loading) {
      if (currentPage < totalPages) {
        setLoading(true);
        setCurrentPage(currentPage + 1);
      }
    }
  };
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [totalPages, loading]);
  
  // 로딩 중일 때 스크롤 방지
  useEffect(() => {
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [loading]);

  useEffect(() => {
    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Remove event listener when component unmounts
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentPage, totalPages, loading]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { scrollTop, scrollHeight } = document.documentElement;
  
        const response = await fetch(apiUrlNowplaying);
        const data = await response.json();
        updateTotalPages(data.total_pages);
  
        // 기존 스크롤 위치 유지
        document.documentElement.scrollTop = scrollTop;
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [currentPage]);

  return (
    <Container>
      <ReuseNowplaying apiUrl={apiUrlNowplaying} totalPages={totalPages} updateTotalPages={updateTotalPages} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export default Nowplaying;
