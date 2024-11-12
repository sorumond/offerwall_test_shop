import { Box, Typography, useMediaQuery } from "@mui/material";
import Logo from "../logo/logo";


export default function Footer() {
    const matches = useMediaQuery('(min-width: 600px)');
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: matches ? '60px' : '30px 77px', backgroundColor: 'var(--main-green)' }}>
            <Box sx={{ display: 'flex', justifyContent: matches ? 'space-between' : 'center', flexDirection: matches ? 'row' : 'column', alignItems: matches ? 'normal' : 'center', maxWidth: 'var(--main-max-width)', width: '100%', }}>
                <Box>
                    <Logo></Logo>
                    <Typography sx={{ textAlign: 'start', fontSize: '12px', color: '#fff' }}>©"LivroMundo" JSC, 2023 - 2024</Typography>
                </Box>
                <Box>
                    <Box sx={{ display: 'flex', width: '277px', height: '107px' }}>
                        <img style={{ flex: '0 0' }}></img>
                        <Typography sx={{ flex: '1 1', textAlign: 'start', color: '#fff' }}>Statensingel 52, 3039 LP Rotterdam, Netherlands</Typography>
                    </Box>
                </Box>
            </Box>

        </Box>
    )
}