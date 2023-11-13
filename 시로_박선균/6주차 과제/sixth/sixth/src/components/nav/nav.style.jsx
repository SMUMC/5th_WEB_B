import styled from 'styled-components'

export const NavContainer = styled.div`
  display: flex;
  position :fixed;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: rgba(169, 141, 255, 1);
`;

export const NavSecondContainer = styled.div`
  width: 50%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 24px;
  color: white;
  margin: 0;
`;

export const Circle = styled.span`
  background-color: rgba(47, 141, 168, 0.1);
  width: 30px; 
  height: 30px; 
  border-radius: 50%;
  position:absolute;
  font-weight : bold;
  color: white; /* 텍스트 색상 설정 */
  text-align : center;
`
export const CartIconSvg = styled.svg`
`