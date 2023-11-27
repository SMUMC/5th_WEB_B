import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const MoviesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 10px;
  height: 100vh;
  margin:0 50px;
`;

export const MovieItem = styled.div`
  margin: 0;
  padding: 0;
  width: 150px;
  height: 250px;
  overflow: hidden;
  border-radius: 7px;

`;

export const MovieImage = styled.div`
  background-image : url(${(props)=>props.imageURL});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 85%;
`;

export const MovieFooter = styled.div`
  height: 20%;
  display: flex;
  background-color: rgba(94, 96, 171, 0.635);
  justify-content: center;
  align-items: center;
`;

export const Overview = styled.div`
  display: none;
  flex-direction: column;
  position: relative;
  margin-top: 10px;
  bottom: 273px;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  color : white;
  padding-left:1px;
  padding-top:10px;
`;
export const PStyling = styled.p`
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 10px;
  color: white;  `

export const PStylingOverview = styled.p`
  display: inline-block;
  margin-left: 10px;
  font-size:10px;
}
`
export const StyledLink = styled(Link)`
  text-decoration: none; 
`
export const PageNationContainer = styled.div`
  display : flex;
  justify-content : center;
  align-items : center;
  height : 10vh;
`
export const PageButton = styled.button`
  width : 200px;
  height : 60px;
  border-radius : 30px;
  background-color : white;
  font-weight : 600;
  background: ${props => props.color || 'white'};
`

export const PageInfo = styled.p`
  font-weight : 600;
  font-size : 20px;
  margin-left : 10px;
  margin-right : 10px;
  
`