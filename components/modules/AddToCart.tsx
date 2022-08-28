import styled from "styled-components"
import { Device } from "../../lib/devices"
import Button from "../atoms/Button"
import Dropdown from "../atoms/Dropdown"


const Container = styled.div`
    margin-left: -4px;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    align-items: flex-end;
    width: 100%;

    @media ${Device.tablet} {
        max-width: 302px;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 22px;
    width: 100%;
`

const Price = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 1.1538461446762085px;
    margin-left: 39px;
    white-space: nowrap;
`

const AddToCart = ({ price } : {
    price: number
}) => {

    return (
        <Container>
            <Dropdown style={{ width: 'calc(100% - 20px)' }} options={[ 'EU 43', 'EU 42', 'EU 41', 'EU 40' ]} />
            <Row>
                <Button>Add to basket</Button>
                <Price>${price}</Price>
            </Row>
        </Container>
    )
}

export default AddToCart