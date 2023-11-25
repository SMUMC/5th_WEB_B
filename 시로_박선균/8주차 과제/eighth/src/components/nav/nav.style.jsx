import styled from 'styled-components'
import { Link } from "react-router-dom";


export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height:50px;
    background-color: rgba(94, 96, 171, 0.635);
    align-items:center;
`
export const UlContainer = styled.ul`
    display:flex;
    list-style-type: none;
    padding: 0;
    margin: 0;
    margin-right : 10px;
`
export const ListItem = styled.li`
    margin-left:10px;
    &:hover{
        transform: scale(1.1);
        cursur: pointer;
        text-decoration-line:underline;
        text-decoration-color:black;
        text-decoration-thickness:3px;
        transition: {
            text-decoration-line :2s;
            text-decoration-color :2s;
            text-decoration-thickness :2s;
            
        }
    }
`
export const IconList = styled.div`
    margin-left:20px;
`
export const StyledLink = styled(Link)`
    text-decoration:none;
    color : white;
    &:hover{
        transform: scale(1.1);
        cursur: pointer;
        text-decoration-line:underline;
        text-decoration-color:black;
        text-decoration-thickness:3px;
        transition: {
            text-decoration-line :2s;
            text-decoration-color :2s;
            text-decoration-thickness :2s;
            
        }
    }
`