import Image from 'next/image'
import styled from 'styled-components'
import Turn from '../../../public/images/turn_your_phone.png'

const Container = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(255,255,255,0.8);
    z-index: 9999;

    display: none;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &> p {
        font-size: 16px;
        font-weight: 500;
        line-height: 26px;
    }

    @media only screen and (max-height: 575.98px) and (orientation: landscape) {
        display: flex;
    }
`

const Notice = () => {

    return (
        <Container className='blur' >
            <p>Please turn your phone for the best experience!</p>
            <Image src={Turn} alt='' />
        </Container>
    )
}

export default Notice