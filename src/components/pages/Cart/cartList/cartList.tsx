import { Box } from "@mui/material";
import CartItem, { onCountChange } from "./cartItem";
import { ICart, } from "../../../../slices/cartSlice";
import { useEffect, useState } from "react";


export default function CartList(props: { updateCartInfo: onCountChange, data: ICart }) {
    const [cartListData, setCartListData] = useState(props.data);

    useEffect(() => {
        setCartListData(props.data);
    }, [props.data])

    return (
        <Box>
            {cartListData && Object.keys(cartListData).map((item) => {
                const data = cartListData[item];
                return (
                    <Box key={`${data.info.id}_${data.count}`} sx={{ marginBottom: '24px' }}>
                        <CartItem info={data} onCountChange={props.updateCartInfo}></CartItem>
                    </Box>
                )
            })}
        </Box>
    )
}