
import { Box, TextField, Typography, useMediaQuery } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import DefaultButtonItem from "../defaultButton/defaultButton";
import paymentMethodImage from "./images/Frame 47393.png";
import { useDispatch, useSelector } from "react-redux";
import { addToQueue } from "../../slices/snackbarSlice";
import { RootState } from "../../store";
import { useState } from "react";


type formData = {
    nameOnCard: {
        message: string,
        error: boolean
    },
    cardNumber: {
        message: string,
        error: boolean
    },
    cardSecurityNumber: {
        message: string,
        error: boolean
    }
}

const textFieldStyles = {
    input: {
        sx: {
            borderRadius: '30px',
            border: '1px solid white',
            color: 'white',

            marginBottom: '12px',
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
                display: "none",
            },
            "& input[type=number]": {
                MozAppearance: "textfield",
            }
        }
    }
}

const titleStyles = {
    color: '#ffffff',
    textAlign: 'start',
    marginBottom: '8px',
    fontSize: '14px',
    fontWeight: 'medium'
}


export default function PaymentMethod() {
    const matches = useMediaQuery('(min-width: 600px)');
    const dispatch = useDispatch();
    const messageQueue = useSelector((state: RootState) => { return state.snackbar });
    const [formData, setFormData] = useState<formData>({
        nameOnCard: {
            message: '',
            error: false
        },
        cardNumber: {
            message: '',
            error: false
        },
        cardSecurityNumber: {
            message: '',
            error: false
        }
    });

    function validation(valitedForm: formData) {
        let validated = true;

        if (valitedForm.nameOnCard.message === '') {
            valitedForm.nameOnCard.error = true;
            validated = false;
        } else {
            valitedForm.nameOnCard.error = false;
        }

        if (valitedForm.cardNumber.message === '') {
            valitedForm.cardNumber.error = true;
            validated = false;
        } else {
            valitedForm.cardNumber.error = false;
        }

        if (valitedForm.cardSecurityNumber.message === '' || formData.cardSecurityNumber.message.length !== 3) {
            valitedForm.cardSecurityNumber.error = true;
            validated = false;
        } else {
            valitedForm.cardSecurityNumber.error = false;
        }

        setFormData({ ...valitedForm })
        return validated;
    }

    function onContinueButtonClick() {
        if (validation(formData)) {
            dispatch(addToQueue({
                message: 'Form sent correctly',
                id: messageQueue.id
            }))
        } else {
            dispatch(addToQueue({
                message: 'Sent Failed',
                id: messageQueue.id
            }))
        }
    }

    return (
        <Box sx={{ width: matches ? '400px' : '320px', padding: matches ? '60px' : '15px', backgroundColor: 'var(--main-green)' }}>
            <Typography sx={{
                height: '62px',
                marginBottom: '24px',
                color: '#fff',
                textAlign: 'start',
                fontSize: '24px',
                borderBottom: '1px solid #fff',
                fontWeight: '600'
            }}>Card details</Typography>
            <Box>
                <Typography sx={{
                    color: '#ffffff',
                    textAlign: 'start',
                    marginBottom: '8px',
                    fontSize: '16px',
                    fontWeight: 'medium'
                }}>Select payment method</Typography>
                <Box>
                    <img src={paymentMethodImage} style={{ width: '100%', height: '39px' }}></img>
                </Box>
            </Box>

            <Box sx={{
                marginBottom: '24px'
            }}>
                <Box>
                    <Typography sx={titleStyles}>Name on card</Typography>
                    <TextField
                        error={formData.nameOnCard.error}
                        onBlur={(event) => {
                            formData.nameOnCard.message = event.target.value;
                        }}
                        slotProps={textFieldStyles}
                        fullWidth></TextField>
                </Box>
                <Box>
                    <Typography sx={titleStyles}>Card on number</Typography>
                    <TextField
                        type="number"
                        error={formData.cardNumber.error}
                        onBlur={(event) => {
                            formData.cardNumber.message = event.target.value;
                        }}
                        slotProps={textFieldStyles}
                        fullWidth>
                    </TextField>
                </Box>
                <Box>
                    <Typography sx={titleStyles}>Card expirastion</Typography>
                    <Box sx={{ display: 'flex' }}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label={'Month'}
                                openTo="month"
                                views={['month']}
                                sx={{
                                    color: '#fff',
                                    borderRadius: '30px',
                                    borderColor: '#fff'
                                }}
                                slotProps={
                                    {
                                        textField: {
                                            slotProps: {
                                                input: {
                                                    sx: {
                                                        color: '#fff',
                                                        borderRadius: '30px',
                                                        borderColor: '#fff'
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            />
                            <DatePicker disablePast={true} label={'Year'} views={['year']} openTo="year" />
                        </LocalizationProvider>

                    </Box>
                </Box>
                <Box>
                    <Typography sx={titleStyles}>Card Security Code</Typography>
                    <TextField
                        type="number"
                        error={formData.cardSecurityNumber.error}
                        onBlur={(event) => {
                            formData.cardSecurityNumber.message = event.target.value;
                        }}
                        slotProps={textFieldStyles}
                        fullWidth>
                    </TextField>
                </Box>
            </Box>

            <Box sx={{
                width: '100%',
                height: '48px',
                borderRadius: '30px',
                overflow: 'hidden',
            }}>
                <DefaultButtonItem onClick={onContinueButtonClick}>Continue</DefaultButtonItem>
            </Box>
        </Box>
    )
}