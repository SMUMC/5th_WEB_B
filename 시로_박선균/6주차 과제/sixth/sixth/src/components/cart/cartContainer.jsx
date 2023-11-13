import CartItem from './cartItem';
import {Container,PStyling,SecondContainer} from './cartContainer.style'
import { WrapItemContainer, HorizontalLine, FontStyling, Footer, ClearBtn, ModalContent, ModalBackground, YesBtn, NoBtn, BtnContainer } from './cartContainer.style';
import { useSelector,useDispatch } from 'react-redux';
import { clearItem } from '../../redux/cartSlice';
import { useState } from 'react';


function CartContainer(){
    let state = useSelector((state) => { return state }) //이게 엄청나게 중요하다! 값을 저장하고 값을 가져와야함 !
    const dispatch = useDispatch();
    const [modal,setModal] = useState(false);

    return (
        <Container>
            <SecondContainer>
                <PStyling>당신이 선택한 음반</PStyling>
                <WrapItemContainer >
                    {state.cart.cartItems.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}
                </WrapItemContainer>
                <HorizontalLine />
                <Footer>
                    <FontStyling>총 가격</FontStyling>
                    <FontStyling>₩ {state.cart.total}</FontStyling>
                </Footer>
                <ClearBtn onClick={() => setModal(true)}>장바구니 초기화</ClearBtn>
                {
                    modal &&
                <ModalBackground>
                    <ModalContent>
                        <p>담아두신 음반을 삭제하시겠습니까?</p>
                        <BtnContainer>
                            <YesBtn onClick={() => {dispatch(clearItem()); setModal(false)}}>네</YesBtn>
                            <NoBtn onClick={()=> setModal(false)}>아니요</NoBtn>
                        </BtnContainer>
                    </ModalContent>
                </ModalBackground>
                }
            </SecondContainer>
        </Container>
    )


}
export default CartContainer