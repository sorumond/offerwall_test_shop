import { Box, Typography, useMediaQuery } from "@mui/material";
import logo from './images/logo_LivroMundo.png';


export default function Logo() {
    const matches = useMediaQuery('(min-width: 600px)');
    return (
        <Box sx={{ width: matches ? '295px' : '144px', height: matches ? `60px` : '43px', display: 'flex', alignItems: 'center' }}>
            <img src={logo} height={'100%'} style={{ marginRight: matches ? '29px' : '4px' }}></img>
            <Typography sx={{ fontWeight: 'bold', fontSize: matches ? '34px' : '16px', color: '#fff' }}>LivroMundo</Typography>
        </Box>
    )
}