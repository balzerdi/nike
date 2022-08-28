import styled from "styled-components";
import Image from "next/image";
import Logo from '../../../public/images/Logo.svg'
import { useEffect, useRef, useState } from "react";
import { Device } from "../../../lib/devices";
import Search from "../../atoms/icons/Search";
import Basket from "../../atoms/icons/Basket";

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
`

const Container = styled.div`
    height: 48px;
    margin-bottom: -48px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 16px;

    @media ${Device.tablet} {
        height: 64px;
        margin-bottom: -64px;
        padding: 24px;
    }

    @media ${Device.laptop} {
        display: none;
    }
`

const Row = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`

const Burger = styled.div`
    margin-left: 8px;
    padding: 12px;
    margin-right: -12px;
    
    &> div {
        height: 2px;
        background-color: #111;
        transition: all 200ms ease-in;
    }

    &> div:last-child {
        width: ${ ({isOpen} : {isOpen: boolean}) => isOpen ? '24px' : '20px' };
        margin: 6px 0 0 auto;

        transform: translateY( ${ ({isOpen} : {isOpen: boolean}) => isOpen ? '-4px' : '0' } ) rotate(${ ({isOpen} : {isOpen: boolean}) => isOpen ? '-45deg' : '0' });
    }

    &> div:first-child {
        width: ${ ({isOpen} : {isOpen: boolean}) => isOpen ? '24px' : '24px' };
        transform: translateY( ${ ({isOpen} : {isOpen: boolean}) => isOpen ? '4px' : '0' } ) rotate(${ ({isOpen} : {isOpen: boolean}) => isOpen ? '45deg' : '0' });
    }
`

const Menu = styled.div`
    height: ${ ({ extended } : { extended: boolean }) => extended ? 'calc(100vh - 48px)' : 0 };
    /* position: absolute;
    top: 48px;
    left: 0;
    right: 0; */
    margin-top: 48px;
    overflow: hidden;
    width: 100%;

    display: flex;
    justify-content: flex-end;
    text-align: right;
    padding: ${ ({ extended } : { extended: boolean }) => extended ? '40px 16px' : '0 16px' };

    @media ${Device.tablet} {
        padding-left: 24px;
        padding-right: 24px;
    }

    transition: all 300ms ease-in-out;

    &>ul {
        display: flex;
        flex-direction: column;
        list-style-type: none;
    }

    &>ul>li {
        margin-bottom: 42px;
        font-family: 'Montserrat', sans-serif;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        opacity: 0.8;
        white-space: nowrap;

        @media ${Device.tablet} {
            margin-bottom: 46px;
            font-size: 24px;

        }
    }
    
    &>ul>li:last-child {
        margin-bottom: 0;
    }

    &>ul>li:nth-child(2) {
        font-weight: 700;
        opacity: 1;
    }

    @media ${Device.laptop} {
        margin-top: 0;
    }
`

const MobileHeader = () => {

    const [ isOpen, setOpen ] = useState(false)

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
            // document.body.style.position = 'fixed'
            window.scrollTo(0, 0)
        } else {
            document.body.style.overflow = 'unset'
            // document.body.style.position = 'static'
        }

    }, [isOpen])

    return (
        <Wrapper className="blur">
            <Container>
                <Image src={Logo} width={56} height={20} alt='' />
                <Row>
                    <Basket />
                    <Burger isOpen={isOpen} onClick={() => setOpen(!isOpen)}> {/* Burger Menu */}
                        <div />
                        <div />
                    </Burger>
                </Row>
            </Container>
            <Menu extended={isOpen} >
                <ul>
                    <li>What’s New</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Personalize</li>
                    <li>Collections</li>
                    <li>Sales</li>
                    <li>
                        <Search />
                    </li>
                </ul>
            </Menu>
        </Wrapper>
    )
}

export default MobileHeader