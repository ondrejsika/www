import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const StyledContent = styled.div`
margin: 6rem auto;
width: 70%;
        @media (max-width: 520px) {
            margin: 4rem auto;
        }
        @media (max-width: 600px) {
            width:80%;
        }
        p{
            color: ${props => props.theme.blue};
        }
`
const StyledButton = styled.button`
border: none;
margin-top: 1rem;
margin-right:1rem;
display: flex;
justify-content: center; 
align-items:center;
background-color: ${props => props.theme.grey};
border-radius: 2rem;
padding:0.8rem 1.5rem;
color: ${props => props.theme.blue};
font-weight: bold;
font-size: 1.8rem;
cursor: pointer;
outline: none;
transition: 0.3s all ease-in-out;
        img{
            width:2rem;
            height: 2rem;
            margin-right: 0.5rem;
        }
@media(max-width: 520px){
        padding: 0.6rem 1.3rem;
        font-size: 1.6rem;
    }
&:hover {
     background-color: #d9d3c9;
    }
`
const StyledSocials = styled.div`
margin-top:1rem;
display: flex;
justify-content: flex-start;
align-items: center;
flex-wrap: wrap;
`

const Socials = () => {
    return (
        <StyledContent>
            <h2>Jsme</h2>
            <p>Komunita lidí a firem co používají Terraform, Vault, Consul, Packer, ...</p>
            <StyledSocials>
                <Link href='https://twitter.com/digitaloceancz'>
                <StyledButton><img src='/icons/twitter-brands.png' alt='Twitter-logo' />
                Twitter
                </StyledButton>
                </Link>

            <Link href=''>
                <StyledButton><img src='/icons/facebook-f-brands.svg' alt='facebook-logo' />
                Facebook
                </StyledButton>
                </Link>
            <Link href='https://www.linkedin.com/company/digitalocean-cz'>
                <StyledButton><img src='/icons/linkedin-in-brands.svg' alt='linkedin-logo' />
                LinkedIn
                </StyledButton>
            </Link>
            </StyledSocials>
        </StyledContent>
    )
}

export default Socials
