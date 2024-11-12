import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { ISnackbarItem, removeItem } from "../../slices/snackbarSlice";
import Snackbar from '@mui/material/Snackbar';


export default function SnackbarControl() {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState<null | ISnackbarItem>(null);
    const messageQueue = useSelector((state: RootState) => { return state.snackbar });
    const dispatch = useDispatch();

    useEffect(() => {
        const firstMessageInQueue = messageQueue.snackBar.length > 0 ? messageQueue.snackBar[0] : null;
        setOpen(firstMessageInQueue !== null);
        if (firstMessageInQueue) {
            setMessage(firstMessageInQueue);
        }
    }, [messageQueue]);

    function handleClose() {
        dispatch(removeItem(message as ISnackbarItem));
    }

    return (
        <Snackbar
            open={open}
            autoHideDuration={5000}
            onClose={handleClose}
            message={`${message?.message}`}
        />
    )
}