import styled from "@emotion/styled";
import { ToggleButton, useMediaQuery } from "@mui/material";
import { Link } from "react-router-dom";

const CustomizedToggleButton = styled(ToggleButton)`
    color: black;
    border-color: rgba(0,0,0,0);
    background-color: #fff;
    margin-right: 24px;
    min-width: 90px;
    padding: 0;

    :last-child {
        margin-right: 0px;
    }

    &&.Mui-selected {
        color: #004832;
        background-color: #FFD012;
        border-radius: 50px;
    }

    a {
        width: 100%;
        height: 100%;
        padding: 10px 12px;
        text-decoration: none;
        color: inherit;
        font-size: 16px;
        text-transform: capitalize;
        font-weight: medium;
    }

    &&.mobile {
        margin-right: 0px;
    }
`

type onClickFuncrion = () => void;

export default function NavigationTabItem(props: { info: { name: string, path: string }, onClick?: onClickFuncrion }) {
    const matches = useMediaQuery('(min-width: 600px)');
    return (
        <CustomizedToggleButton value={props.info.path} className={matches ? '' : 'mobile'}>
            <Link to={props.info.path} onClick={props.onClick}>
                {props.info.name}
            </Link>
        </CustomizedToggleButton>
    )
}