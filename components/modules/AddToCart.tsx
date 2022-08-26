import styled from "styled-components"
import Button from "../atoms/Button"
import Dropdown from "../atoms/Dropdown"


const Container = styled.div`
    margin-left: -4px;
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    align-items: center;
    width: fit-content;
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 22px;
    
    &> p {
        margin-left: 39px
    }
`

const Price = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 30px;
    font-weight: 500;
    line-height: 38px;
    letter-spacing: 1.1538461446762085px;
`

const AddToCart = ({ price } : {
    price: number
}) => {

    return (
        <Container>
            <Dropdown style={{ padding: '0 10px' }} options={[ 'EU 43', 'EU 42', 'EU 41', 'EU 40' ]} />
            <Row>
                <Button>Add to basket</Button>
                <Price>${price}</Price>
            </Row>
        </Container>
    )
}

export default AddToCart