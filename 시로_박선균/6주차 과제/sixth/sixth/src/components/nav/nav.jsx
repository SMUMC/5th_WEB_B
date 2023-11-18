import React from 'react';
import { NavContainer, NavSecondContainer, Title, CartIconSvg, Circle } from './nav.style';
import { CartIcon } from '../../constants/icons';
import { useSelector } from 'react-redux';


const Nav = () => {
    let state = useSelector((state) => { return state }) //이게 엄청나게 중요하다! 값을 저장하고 값을 가져와야함 !

    return (
        <NavContainer>
            <NavSecondContainer>
                <Title>SMU PlayList</Title>
                <div>
                    <CartIconSvg as={CartIcon} />
                    <Circle>
                        {state.cart.totalCount}
                    </Circle>
                </div>
            </NavSecondContainer>
        </NavContainer>
    );
};

export default Nav;
