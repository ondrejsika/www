import React from 'react'
import styled from 'styled-components'
import Image from 'next/image';
import Link from 'next/link';

const StyledBackground = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color:#FFFFFFB0;
`
const StyledDiv = styled.div`
padding: 3rem 0;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 70rem;
background-color: ${props => props.theme.background};
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
text-align: center;
    @media(max-width: 768px) {
        width:50rem;
    }
    @media(max-width: 600px) {
        width:40rem;
    }
    @media(max-width: 420px) {
        width: 30rem;
    }
    p {
        color: ${props => props.theme.white};
        font-size: 2.5rem;
        width: 80%;
        margin:1rem 0;
        @media(max-width: 600px) {
        font-size: 2rem;
        }
        @media(max-width: 420px) {
        font-size: 1.8rem;
    }
        &:nth-of-type(2) {
            color: ${props => props.theme.red};
            font-weight: bold;
        }
    }
`

const StyleHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin:1rem 0;
        h2 {
            color: ${props => props.theme.white};
            font-size: 4rem;
            margin: unset;
            @media(max-width: 600px) {
                font-size: 3.5rem;
            }
            @media(max-width: 420px) {
                font-size: 3rem;
            }
        }
        img {
            width: 5rem;
            height: auto;
            @media(max-width: 600px) {
                width:4rem;
            }
        }
`

const StyledNewsletterButton = styled.button`
border: none;
background-color: ${props => props.theme.white};
margin-top: 2rem;
border-radius: 2rem;
padding:1.5rem 4rem;
color: ${props => props.theme.background};
font-family: ${props => props.theme.secondaryFont};
font-weight: bold;
font-size: 2.2rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
outline: none;
transition: 0.3s all ease-in-out;
    &:hover {
     background-color: ${props => props.theme.red};   
     color: ${props => props.theme.white};
    }
    @media (max-width: 600px) {
            font-size: 2rem;
            padding: 1.5rem 3rem;
        }
        @media(max-width: 420px) {
        padding: 1rem 2rem;
    }
`

const StyledExit = styled.img`
width: 3rem;
position: absolute;
right: 1rem;
top: 1rem;
transition: 0.3s transform ease;
cursor: pointer;
@media(max-width: 600px) {
        width: 2.5rem;
    }
 &:hover {
     transform: scale(1.1);
 }
`
const Popup = ({SetshowPopup}) => {

    const funcHide = () => {
        SetshowPopup(false);
    }

    return (
        <StyledBackground>
        <StyledDiv>
            <StyledExit src='/icons/times-solid.svg' alt='exit-icon' onClick={funcHide}></StyledExit>
            <Image src='/icons/paper-plane-popup.svg' width='100' height='100' alt='paper-plane-icon'/>
            <StyleHeader>
            <h2>Ahoj Devopsáku</h2><img src='/icons/wave-hand.png' alt='wave-hand-icon'/>
            </StyleHeader>
            <p>Chceš dostávat aktuální info ohledně DevOps a zůstat tak stále v obraze?</p>
            <p>Přihlaš se k odběru našeho newsletteru!</p>
            <Link href='https://airtable.com/shr1EV8xLC0bCW4df'>
                <StyledNewsletterButton>Chci dostávat novinky</StyledNewsletterButton>
            </Link>
        </StyledDiv>
        </StyledBackground>
    )
}

export default Popup
