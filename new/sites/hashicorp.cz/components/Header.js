import React from 'react'
import Image from 'next/image';
import styled from 'styled-components';

const StyledHeader = styled.div`
width: 100%;
height: auto;
position: relative;
    img {
     width: 100%;
     height: 43rem;
     object-fit: cover;
     @media(max-width: 992px) {
         height: 35rem;
     }
     @media(max-width: 768px) {
         height: 32rem;
     }
     @media (max-width: 600px) {
         height: 30rem;
     }
     @media(max-width: 520px){
        height: 25rem;
    }
    @media(max-width: 420px){
        height: 20rem;
    }
    }
`
const StyledTextDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 10%;
    transform: translateY(-50%);
    p {
        font-size: 4.8rem;
        color: white;
        font-family: ${props => props.theme.secondaryFont};
        letter-spacing: 0.5rem;
        @media (max-width: 992px) {
         font-size: 4.5rem;
     }
     @media (max-width: 768px) {
         font-size: 4.3rem;
     }
        @media (max-width: 600px) {
         font-size: 4rem;
     }
     @media (max-width: 420px) {
         font-size: 3rem;
     }
    }
`

const Header = () => {
    return (
        <StyledHeader>
            <StyledTextDiv>
                <h1>HashiCorps</h1>
                <p>Czech Community</p>
            </StyledTextDiv>
            <img src='/photos/header.png' alt='hlavicka-banner'></img>
        </StyledHeader>
    )
}

export default Header
