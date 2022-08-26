import styled from "styled-components"
import { Device } from "../../../lib/devices"
import MobileHeader from "./MobileHeader"
import Image from "next/image";
import Logo from '../../../public/images/Logo.svg'
import Search from '../../../public/images/icons/Search.svg'
import Basket from '../../../public/images/icons/Basket.svg'
import Link from "next/link";


const Wrapper = styled.header`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    height: fit-content;
`

const Container = styled.div`
    display: none;

    @media ${Device.laptop} {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        padding: 20px 44px;
        width: 100%;
    }

    @media ${Device.tablet} {
        padding: 20px 24px;
    }
`

const Menu = styled.nav`

    padding: 22px 52px 20px 48px;
    border-radius: 31px;
    
    &>ul {
        display: flex;
        flex-direction: row;
        list-style-type: none;
    }

    &>ul>li {
        margin-right: 42px;
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
        font-weight: 500;
        line-height: 20px;
        cursor: pointer;
        opacity: 0.8;
        white-space: nowrap;

        @media ${Device.laptop} {
            margin-right: 46px;
        }
    }
    
    &>ul>li:last-child {
        margin-right: 0;
    }

    &>ul>li:nth-child(2) {
        font-weight: 700;
        opacity: 1;
    }
`

const Header = () => {

    return (
        <Wrapper>
            <MobileHeader />
            <Container>
                <Link href="/" passHref>
                    <a><Image src={Logo} width={56} height={20}  alt='' /></a>
                </Link>
                <Menu className="blur">
                    <ul>
                        <li>What’s New</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>Kids</li>
                        <li>Personalize</li>
                        <li>Collections</li>
                        <li>Sales</li>
                        <li>
                            <Image src={Search} width={18} height={18} alt='' />
                        </li>
                    </ul>
                </Menu>
                <Link href="/" passHref >
                    <a><Image src={Basket} width={24} height={20}  alt='' /></a>
                </Link>
            </Container>
        </Wrapper>
    )
}

export default Header