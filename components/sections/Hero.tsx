import Image from "next/image"
import AddToCart from "../modules/AddToCart"
import styled from "styled-components"
import ShoeUp from '../../public/images/shoe.png'
import ShoeDown from '../../public/images/shoe_down.png'
import { Device } from "../../lib/devices"
import { keyframes } from "@emotion/react"
import Star from "../atoms/icons/Star"
import Delivery from "../atoms/icons/Delivery"
import Info from "../atoms/icons/Info"

const Section = styled.section`
    min-height: 100vh;
    width: 100%;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 16px 64px 16px;
    margin: auto 0 0 0;
    width: 100%;

    @media ${Device.tablet} {
        flex-direction: row;
        padding: 0 24px 50px 24px;
        flex-grow: 1;
    }

    @media ${Device.laptop} {
        padding: 0 24px 62px 80px;
        flex-grow: 0;
    }

    @media ${Device.laptopL} {
        padding: 0 95px 75px 160px;
    }

    @media ${Device.largeTabletLandscape} {
        padding: 0 24px 144px 80px;
    }

    @media ${Device.largeTabletPortrait} {
        flex-grow: 1;
    }
`

const Column = styled.div`
    width: 100%;
    position: relative;
    z-index: 2;

    @media ${Device.tablet} {
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    @media ${Device.laptop} {
        justify-content: flex-end;
        padding-bottom: 23px;
    }

    @media ${Device.largeTabletPortrait} {
        justify-content: center;
        padding-bottom: 0;
    }
`

const RightColumn = styled(Column)`
    
    @media ${Device.tablet} {
        align-items: flex-end;
        justify-content: flex-end;
    }

    @media ${Device.laptop} {
        margin: auto 0 0 0;
        padding-bottom: 0px;
    }
`

const Title = styled.h1`
    font-family: 'Montserrat', sans-serif;
    font-size: 40px;
    font-style: italic;
    font-weight: 700;
    line-height: 49px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 24px;

    @media ${Device.tablet} {
        margin-bottom: 32px;
        font-size: 56px;
        line-height: 68.26px;
    }
`

const Body = styled.p`
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    letter-spacing: 0px;
    text-align: left;
    margin-bottom: 24px;
    max-width: 300px;

    & > span {
        font-weight: 700;
    }

    @media ${Device.tablet} {
        margin-bottom: 64px;
        font-size: 18px;
    }

    @media ${Device.laptopL} {
        margin-bottom: 127px;
    }
`

const IconsContainer = styled.div`
    display: flex;
    flex-direction: row;
    opacity: 0.5;

    & > span {
        margin-right: 27px !important;
        display: flex;
        align-items: center;
    }

    & > span:nth-child(2) {
        margin-right: 23px !important;
    }

    & > span:last-child {
        display: flex;
        flex-direction: row;
        margin-right: 0;
        align-items: center;
    }

    & > span:last-child > p {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        font-weight: 700;
        line-height: 17px;
        letter-spacing: 0px;
        text-align: left;
        margin-right: 3px;
    }
`

const TopImage = styled.div`
    position: static;
    margin-top: -50px;

    @media ${Device.tablet} {
        position: absolute;
        left: calc(50% + 40px);
        top: 25%;
        right: calc(50%);
        width: 75%;
        transform: translate(-15%, -25%);
        z-index: 3;
    }

    @media ${Device.laptop} {
        top: -20%;
        right: 2%;
        left: auto;
        width: 55%;
        transform: none;
    }

    @media ${Device.laptopL} {
        top: -22%;
        right: 4%;
        left: auto;
        width: 50%;
        transform: none;
    }

    @media ${Device.largeTabletPortrait} {
        top: 25%;
        right: calc(50%);
        left: calc(50% + 120px);
        width: 75%;
        transform: translate(-15%, -25%);
    }

    @media ${Device.largeTabletLandscape} {
        top: -18%;
        right: -15%;
        left: auto;
        width: 70%;
        transform: none;
    }
`

const BottomImage = styled.div`
    display: none;
    position: absolute;
    z-index: 1;

    @media ${Device.tablet} {
        display: block;
        top: auto;
        bottom: -12%;
        left: calc(0%);
        width: 75%;
    }

    @media ${Device.laptop} {
        left: 50%;
        width: 55%;
        bottom: -25%;
        transform: translateX(-50%);
    }

    @media ${Device.laptopL} {
        left: 50%;
        width: 50%;
        bottom: -20%;
        transform: translateX(-40%);
    }

    @media ${Device.largeTabletPortrait} {
        display: block;
        top: auto;
        bottom: -12%;
        left: 5%;
        width: 75%;
        transform: none;
    }

    @media ${Device.largeTabletLandscape} {
        left: 50%;
        width: 70%;
        bottom: -15%;
        transform: translateX(-30%);
    }
`

const Hero = () => {

    return (
        <Section>
            <TopImage>
                <Image src={ShoeUp}  alt='' />
            </TopImage>
            <BottomImage>
                <Image src={ShoeDown}  alt='' />
            </BottomImage>
            <Wrapper>
                <Column>
                    <Title>Feel strong<br/>like Lebron</Title>
                    <Body>
                        The LeBron 17 LMTD features a large <span>Max Air</span> unit in the heel and Zoom Air cushioning for extra <span>comfort.</span><br/><br/>
                        Knit material wraps your feet for <span>lightweight</span> support so you can make quick, powerful moves like a champ.
                    </Body>
                    <IconsContainer>
                        <span><Info /></span>
                        <span><Delivery /></span>
                        <span>
                            <p>4,7</p>
                            <Star />
                        </span>
                    </IconsContainer>
                </Column>
                <RightColumn>
                    <AddToCart 
                        price={249}
                    />
                </RightColumn>
            </Wrapper>
        </Section>
    )
}

export default Hero