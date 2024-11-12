import styled from "@emotion/styled";
import { Button } from "@mui/material";
import shopIcon from './images/basketIcon.svg';
import { Link } from "react-router-dom";

const CartButtonCustomization = styled(Button)`
    min-width: auto;
    width: 44px;
    height: 44px;

    border-radius: 50px;
    background-color: #FFD012;
    padding: 0;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
    }

    img {
        width: 21px;
        height: 21px;
    }
`

export default function CartButton() {
    return (
        <CartButtonCustomization>
            <Link to={'/cart'}>
                <img src={shopIcon} />
            </Link>
        </CartButtonCustomization>
    )
}