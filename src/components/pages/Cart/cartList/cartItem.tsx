import styled from "@emotion/styled";
import { Box, Button, TextField, Typography, useMediaQuery } from "@mui/material";
import { useState } from "react";
import { ICartItem } from "../../../../slices/cartSlice";
import deleteImage from './images/delete_button.svg';

export type onCountChange = (cartItem: ICartItem) => void;

const CartImage = styled.img({
    width: '105px',
    height: '105px',
    marginRight: '24px',
    borderRadius: '30px',
    objectFit: 'cover'
});

export default function CartItem(props: { info: ICartItem, onCountChange: onCountChange }) {
    const matches = useMediaQuery('(min-width: 600px)');
    const [data] = useState(props.info);
    return (
        <Box sx={{ position: 'relative', display: 'flex' }}>
            <Box sx={{
                display: "flex",
                flex: '1 1',
                alignItems: 'center',
                backgroundColor: 'rgba(30, 30, 30, 0.1)',
                padding: '10px',
                borderRadius: '30px'
            }}>
                <CartImage src={data.info.image}></CartImage>
                <Box sx={{
                    display: 'flex',
                    flexDirection: matches ? 'row' : 'column',
                    flex: '1 1',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Typography sx={{ marginRight: '' }}>{data.info.name}</Typography>
                    <Typography>{data.info.price}</Typography>
                    <TextField
                        onBlur={(event) => { props.onCountChange({ ...data, count: +event.target.value }) }}

                        type="number"
                        defaultValue={data.count}
                        slotProps={{
                            inputLabel: {
                                style: {
                                    padding: '0px'
                                }
                            }
                        }}
                        sx={{
                            width: '32px',
                            height: '32px',
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                                display: "none",
                            },
                            "& input[type=number]": {
                                padding: '0px',
                                width: '32px',
                                height: '32px',
                                textAlign: 'center',
                                MozAppearance: "textfield",
                            },
                        }}
                    ></TextField>
                    <Typography>{data.count * data.info.price}</Typography>
                </Box>
            </Box>
            <Button onClick={() => { props.onCountChange({ ...data, count: 0 }) }}
                sx={{
                    position: 'absolute',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    right: '-64px'
                }}
            >
                <img src={deleteImage} alt="delete image" />
            </Button>
        </Box>

    )
}