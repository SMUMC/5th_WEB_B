import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from 'styled-components';

function Banner() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://localhost:8080/auth/me', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    },
                });
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false); // 데이터 받아오기 완료 후 로딩 상태 변경
            }
        };
  
        fetchData();
    }, []);
    
    return (
        <ContainingBanner>
            {loading ? (
                <H2>로딩 중...</H2>
            ) : (
                <>
                    {error ? (
                        <ErrorMessage>환영합니다.</ErrorMessage>
                    ) : (
                        <UserInfo>
                            <H2>{data?.name} 님 반갑습니다.</H2>
                        </UserInfo>
                    )}
                </>
            )}
        </ContainingBanner>
    );
}


const ContainingBanner= styled.div`
    background-color: black;
    width: 100%;
    height: 30vh;
    z-index: 5;
    display: flex;
    justify-content: center;
    align-items: center;
`
const H2 = styled.h2`
    color: white;
    font-size: 17px;
`
const ErrorMessage = styled.p`
    font-size: 17px;
    color: white;
`;
const UserInfo = styled.div`
    color: white;
    font-size: 17px;
    text-align: center;
`;
export default Banner;