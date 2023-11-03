import CartItem from './cartItem';
import {Container,PStyling,SecondContainer} from './cartContainer.style'
import chartItems from '../../constants/chartItems';
import { WrapItemContainer } from './cartContainer.style';
import { useSelector } from 'react-redux';

function CartContainer(){
    let state = useSelector((state) => { return state }) //이게 엄청나게 중요하다! 값을 저장하고 값을 가져와야함 !

    return (
        <Container>
            <SecondContainer>
                <PStyling>당신이 선택한 음반</PStyling>
                <WrapItemContainer >

                    {state.cart.cartItems.map((item) => (
                    <CartItem item={item} key={item.id} />
                ))}
                </WrapItemContainer>

            </SecondContainer>
        </Container>
    )


}
export default CartContainer