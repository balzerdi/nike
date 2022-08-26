import { CSSProperties, useState } from "react";
import styled, { StyledProps } from "styled-components";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Container = styled.div`
    max-width: 282px;
    width: 100%;
    cursor: pointer;
`

const Select = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-color: rgba(0,0,0,0.1);
`

const Label = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 0.6153846383094788px;
    text-align: left;
`

const Dropdown = ({ style={}, options, initial=0 } : {
    style?: CSSProperties
    options: string[]
    initial?: number
}) => {

    const [ isOpen, setOpen ] = useState(false)
    const [ index, setIndex ] = useState(initial)

    return (
        <Container style={style} className='blur' >
            <Select>
                <Label>{ options[index] }</Label>
                <ExpandMoreIcon />
            </Select>
        </Container>
    )
}

export default Dropdown