import { Box, Typography, useMediaQuery } from "@mui/material";
import CartList from "./cartList/cartList";
import PaymentMethod from "../../PaymentMethod/paymentMethod";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, ICartItem, removeAllFromCart, removeFromCart } from "../../../slices/cartSlice";
import { RootState } from "../../../store";
import DefaultButtonItem from "../../defaultButton/defaultButton";


export default function Cart() {
    const cartListData = useSelector((state: RootState) => { return state.cart.cart });
    const matches = useMediaQuery('(min-width: 600px)');
    const dispatch = useDispatch();

    function updateCartInfo(newData: ICartItem) {
        if (newData.count > 0) {
            dispatch(addToCart({ ...newData }));
        } else {
            dispatch(removeFromCart({ ...newData }));
        }
    }

    function clearCart() {
        dispatch(removeAllFromCart())
    }

    function getSubtotal() {
        let subtotal = 0;
        Object.keys(cartListData).forEach((item) => {
            subtotal += cartListData[item].info.price * cartListData[item].count;
        });
        return subtotal;
    }

    return (
        <Box sx={{ maxWidth: matches ? 'var(--main-max-width)' : 'var(--mobile-max-width)', width: '100%', backgroundColor: '#fff', borderRadius: '30px', display: 'flex', flexDirection: matches ? 'row' : 'column', overflow: 'hidden' }}>
            <Box
                sx={{
                    flex: '1 1',
                    padding: matches ? '60px 91px 60px 60px' : '0px 15px 81px 15px'
                }}>
                <Box sx={{
                    width: '100%',
                    height: '62px',
                    borderBottom: '1px solid #D9D9D9',
                    marginBottom: '24px'
                }}>
                    <Typography sx={{
                        color: '#002700',
                        fontSize: '24px',
                        fontWeight: '600',
                        textAlign: 'start'
                    }}>
                        Shopping Cart
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CartList updateCartInfo={updateCartInfo} data={{ ...cartListData }}></CartList>
                    <Box sx={{
                        display: Object.keys(cartListData).length > 0 ? '' : 'none',
                        width: '100px',
                        height: '40px',
                        marginBottom: '10px',
                        alignSelf: 'end'
                    }}>
                        <DefaultButtonItem onClick={clearCart}>Clear All</DefaultButtonItem>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Link to='/shop'>{`< Back to shop`}</Link>
                    <Typography>Subtotal: {`${getSubtotal()}`}</Typography>
                </Box>
            </Box>
            <Box sx={{ flex: '0 0' }}>
                <PaymentMethod></PaymentMethod>
            </Box>
        </Box>
    )
}