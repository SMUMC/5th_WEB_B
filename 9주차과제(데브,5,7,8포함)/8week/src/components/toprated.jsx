import React, { useState } from 'react';
import ReuseMovie from './reusemovie';
import styled from 'styled-components';

function Toprated() {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const apiUrlToprated = `https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${currentPage}`;
  
  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  const updateTotalPages = (pages) => {
    setTotalPages(pages);
  };

  return (
    <Container>
      <ReuseMovie apiUrl={apiUrlToprated} totalPages={totalPages} updateTotalPages={updateTotalPages} />
      <Pagination>
      <PrevButton onClick={handlePrevPage} disabled={currentPage === 1}>
          Previous Page
        </PrevButton>
        <span>Page {currentPage}</span>
        <NextButton onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next Page
        </NextButton>
      </Pagination>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Pagination = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  width: 300px;

  
`;
const ButtonBase = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  color: #fff;
  border: none;
  outline: none;
`;

const PrevButton = styled(ButtonBase)`
  background-color: ${(props) => (props.disabled ? 'red' : 'blue')};
`;

const NextButton = styled(ButtonBase)`
  background-color: ${(props) => (props.disabled ? 'red' : 'blue')};
`;
export default Toprated;