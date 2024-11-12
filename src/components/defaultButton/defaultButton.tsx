import { Button } from "@mui/material";

type onClick = () => void

export default function DefaultButtonItem(props: { children: string, onClick?: onClick }) {
    return (
        <Button
            onClick={props.onClick}
            sx={{
                width: '100%',
                height: '100%',
                backgroundColor: 'var(--main-yellow)',
                color: '#000',
                fontWeight: 'bold'
            }}
        >
            {props.children}
        </Button>
    )
}