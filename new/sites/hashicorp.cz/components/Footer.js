import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';

const StyledContent = styled.div`
padding: 6rem 0;
width: 100%;
background-color: ${props => props.theme.blue};
        @media (max-width: 520px) {
            padding: 4rem 0;
        }
        h2 {
            text-align: center;
            color: white;
        }
`

const StyledButton = styled.button`
border: none;
display: block;
margin: 2rem auto 0 auto;
background-color: ${props => props.theme.grey};
border-radius: 1.5rem;
padding: 1.5rem 8rem;
color: ${props => props.theme.blue};
font-size: 2.5rem;
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
outline: none;
transition: 0.3s all ease-in-out;
@media(max-width: 520px){
        padding: 1.5rem 5rem;
    }
    @media(max-width: 420px){
        font-size: 2rem;
        padding: 1.5rem 4rem;
    }
&:hover {
     background-color: #d9d3c9;
     color: white;   
    }
`

const Footer = () => {
    return (
        <StyledContent>
            <h2>Máte dotaz ?</h2>
            <Link href='https://www.facebook.com/HashiCorpCZ'>
                <StyledButton>Kontaktujte nás</StyledButton>
            </Link>
        </StyledContent>
    )
}

export default Footer
