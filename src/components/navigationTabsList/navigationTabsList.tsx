import { Box, ToggleButtonGroup, useMediaQuery } from "@mui/material";
import NavigationTabItem from "./navigationTabItem";
import { useLocation } from "react-router-dom";


const navgionTabs: Array<{ path: string, name: string }> = [
    {
        path: '',
        name: 'Home'
    },
    {
        path: 'shop',
        name: 'Shop'
    },
    {
        path: 'about',
        name: 'About'
    },
    {
        path: 'contact',
        name: 'Contact'
    }
]

export default function NavigationTabsList() {
    const matches = useMediaQuery('(min-width: 600px)');
    const path: string = useLocation().pathname.split('/')[1];


    return (<>
        <Box sx={{ height: '44%' }}>
            {
                <ToggleButtonGroup value={path} sx={{ overflow: 'hidden', flexDirection: matches ? 'row' : 'column', backgroundColor: '#fff', borderRadius: '50px', height: '100%' }}>
                    {
                        navgionTabs.map((tab) => {
                            return (
                                <NavigationTabItem key={tab.path} info={tab}></NavigationTabItem>
                            )
                        })
                    }
                </ToggleButtonGroup>
            }
        </Box>
    </>)
}