import styled from "@emotion/styled";
import { Box, Paper, Typography } from "@mui/material";
import DefaultButtonItem from "../../defaultButton/defaultButton";

type onBuyButtonClick = (storeItem: IStoreItem) => void;

export interface IStoreItem {
    name: string,
    price: number,
    id: number,
    image: string
}

const ShopImageItem = styled.img({
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: '30px',
});

export default function ShopItem(props: { info: IStoreItem, onBuyButtonClick: onBuyButtonClick }) {
    const data = props.info;
    return (
        <Box>
            <Paper elevation={3} sx={{ width: '307px', height: '276px', borderRadius: '30px', marginBottom: '12px' }}>
                <ShopImageItem src={data.image} alt={data.name} />
            </Paper>

            <Paper elevation={3} sx={{ borderRadius: '30px', padding: '10px' }}>
                <Box sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    width: '287px'
                }}>
                    <Typography sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '39px',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textTransform: 'uppercase',
                        marginBottom: '8px'
                    }}
                    >{`“${data.name}“`}</Typography>
                    <Typography sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignContent: 'center',
                        alignItems: 'center',
                        flex: '1 1',
                        height: '39px',
                        color: '#FF0000',
                        fontWeight: 'bold',
                        fontSize: '16px'
                    }}
                    >{`${data.price} $`}</Typography>
                    <Box sx={{
                        flex: '1 1',
                        height: '39px',
                        overflow: 'hidden',
                        borderRadius: '50px'
                    }}>
                        <DefaultButtonItem onClick={() => { props.onBuyButtonClick(props.info) }}>BUY</DefaultButtonItem>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}