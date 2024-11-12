import { Box, Container, Paper, Typography, useMediaQuery } from "@mui/material";
import { storeConfig } from "../../../utils/store.config";
import ShopItem, { IStoreItem } from "./shopItem";
import { getAllImages } from "../../../assets/images";
import { useEffect, useState } from "react";
import DefaultButtonItem from "../../defaultButton/defaultButton";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../slices/cartSlice";

export default function Shop() {
    const [images, setImages] = useState<{ [key: string]: string }>();
    const dispatch = useDispatch();
    const matches = useMediaQuery('(min-width: 600px)');

    useEffect(() => {
        getAllImages().then((response) => {
            setImages(response);
        })
    }, []);

    function onBuyButtonClick(info: IStoreItem) {
        dispatch(addToCart({
            info: info,
            count: 1
        }));
    }

    return (
        <Container maxWidth={false} sx={{ display: 'flex', justifyContent: 'center', }}>
            <Box sx={{
                maxWidth: 'var(--main-max-width)',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Typography sx={{
                    color: '#002700',
                    fontWeight: 'bold',
                    fontSize: '36px',
                    marginBottom: '38px'
                }}>Shop</Typography>

                <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: matches ? 'space-between' : 'center' }}>
                    {storeConfig.map((item, id) => {
                        return (
                            <Box
                                sx={{ marginBottom: '38px' }}
                                key={`${item.name}_${id}`}
                            >
                                <ShopItem
                                    info={{ ...item, id: id, image: images?.[`./image_${id}.png`] || '' }}
                                    onBuyButtonClick={onBuyButtonClick}>
                                </ShopItem>
                            </Box>
                        )
                    })}
                </Box>

                <Paper elevation={3} sx={{
                    width: '230px',
                    height: '60px',
                    overflow: 'hidden',
                    borderRadius: '30px'
                }}>
                    <DefaultButtonItem>See More</DefaultButtonItem>
                </Paper>
            </Box>
        </Container>
    )
}