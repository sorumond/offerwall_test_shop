import { Box, Button, ClickAwayListener, Container, Grow, MenuList, Paper, Popper, useMediaQuery } from "@mui/material";
import NavigationTabsList from "../navigationTabsList/navigationTabsList";
import CartButton from "../cartButton/cartButton";
import Logo from "../logo/logo";
import { useRef, useState } from "react";
import ViewHeadlineIcon from '@mui/icons-material/ViewHeadline';


export default function Header() {
    const matches = useMediaQuery('(min-width: 600px)');
    const anchorRef = useRef(null);
    // const anchorRef: HTMLAnchorElement | null = null;
    const [open, setOpen] = useState(false);

    function handleToggle() {
        setOpen(!open);
    }

    function handleClose() {
        setOpen(false);
    }
    return (
        <>
            <Container maxWidth={false} sx={{ bgcolor: 'var(--main-green)', height: '', display: 'flex', justifyContent: 'center' }}>
                <Box sx={{
                    padding: '31px 0', width: matches ? 'var(--main-max-width)' : 'var(--mobile-max-width)', height: '120px', display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center'
                }}>
                    <Logo></Logo>
                    <Box>
                        {matches ? <NavigationTabsList></NavigationTabsList> :
                            <Box >
                                <Button
                                    ref={anchorRef}
                                    aria-controls={open ? 'composition-menu' : undefined}
                                    aria-expanded={open ? 'true' : undefined}
                                    aria-haspopup="true"
                                    onClick={handleToggle}
                                    sx={{
                                        backgroundColor: '#fff'
                                    }}
                                >
                                    <ViewHeadlineIcon></ViewHeadlineIcon>
                                </Button>
                                <Popper
                                    open={open}
                                    anchorEl={anchorRef?.current}
                                    role={undefined}
                                    placement="bottom-start"
                                    transition
                                >
                                    {({ TransitionProps, placement }) => (
                                        <Grow
                                            {...TransitionProps}
                                            style={{
                                                transformOrigin:
                                                    placement === 'bottom-start' ? 'left top' : 'left bottom',
                                            }}
                                        >
                                            <Paper>
                                                <ClickAwayListener onClickAway={handleClose}>
                                                    <MenuList
                                                        autoFocusItem={open}
                                                        id="composition-menu"
                                                        aria-labelledby="composition-button"
                                                        onKeyDown={handleClose}
                                                        sx={{
                                                            flexDirection: 'column'
                                                        }}
                                                    >
                                                        <NavigationTabsList></NavigationTabsList>
                                                    </MenuList>
                                                </ClickAwayListener>
                                            </Paper>
                                        </Grow>
                                    )}
                                </Popper>
                            </Box>}
                    </Box>

                    <CartButton></CartButton>
                </Box>
            </Container>
        </>
    )
}