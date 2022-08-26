import { PropsWithChildren } from "react";
import styled from "styled-components";

const Container = styled.div`
    position: relative;
    z-index: 1;
    cursor: pointer;
`

const Content = styled.div`
    position: relative;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    padding: 26px 33px 24px 33px;
    background-color: white;
    border-radius: 35px;

    &::before {
        content: '';
        box-shadow: 0px 21px 25px 0px rgba(0, 0, 0, 0.14);
        position: absolute;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 35px;
        width: calc(100% - 40px);
        z-index: -1;
    }
`

const Button: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <Container>
            <Content>
                {
                    children
                }
            </Content>
        </Container>
    )
}

export default Button