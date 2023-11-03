import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { addItem, removeItem } from '../../redux/cartSlice';
import { WrapItemContainer, ImageContainer, Button, PStyling, ContentsWrapContainer, ButtonWrapContainer, ImageWrapContainer } from './cartItem.style';
import { ChevronDown, ChevronUp } from '../../constants/icons';

function CartItem({item}) { //구조분해 할당을 위해 {}를 써야함
    const dispatch = useDispatch();
    return (
        <div>
            <WrapItemContainer>
                <ImageWrapContainer>
                    <ImageContainer src={item.img} alt="" width={100} />
                </ImageWrapContainer>
                <ContentsWrapContainer>
                    <PStyling>{item.title} | {item.singer}</PStyling>
                    <PStyling>₩ {item.price}</PStyling>
                </ContentsWrapContainer>
                <ButtonWrapContainer>
                    <Button onClick={() => {dispatch(addItem(item.id))
                    
                    }
                    }>
                        <ChevronUp />
                    </Button>
                    <PStyling>{item.amount}</PStyling> 
                    <Button onClick={() => dispatch(removeItem(item.id))}>
                        <ChevronDown />
                    </Button>
                </ButtonWrapContainer>
            </WrapItemContainer>
        </div>
    );
}

export default CartItem;