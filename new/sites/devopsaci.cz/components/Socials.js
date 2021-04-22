import React from 'react'
import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';

const StyledContent = styled.div`
margin: 6rem auto;
        @media (max-width: 520px) {
            margin: 4rem auto;
        }
h2 {
    margin-bottom: 2rem;
    @media (max-width: 520px) {
            margin-bottom: 1rem;
        }
}
`

const StyledContainer = styled.div`
display: flex;
justify-content:center;
align-items: center;
flex-wrap: wrap;
`

const StyledSingle = styled.div`
padding: 0.6rem 1rem;
margin: 1rem 0.5rem 0 0.5rem;
background-color: ${props => props.theme.background};
display: flex;
justify-content: center;
align-items: center;
border-radius: 4rem;
cursor: pointer;
transition: 0.3s all ease;
    &:hover{
        transform: scale(1.05);
    }
    p{
        font-family: IBM PLEX Sans, sans-serif;
        font-size: 1.6rem;
        font-weight: bold;
        margin-left: 0.5rem;
        color: ${props => props.theme.white};
    }
`

const Socials = () => {
    return (
        <StyledContent>
            <h2>Rozcestník</h2>
            <StyledContainer>
                <Link href='https://twitter.com/devopsaci'><StyledSingle>
                    <Image
                    src='/icons/twitter-brands.svg'
                    width='16'
                    height='16'
                    alt='twitter-icon'
                    /><p>Twitter</p></StyledSingle></Link>
                       <Link href='https://www.facebook.com/devopsaci'><StyledSingle>
                    <Image
                    src='/icons/facebook.svg'
                    width='16'
                    height='16'
                    alt='facebook-icon'
                    /><p>Facebook group</p></StyledSingle></Link>
                       <Link href='https://www.linkedin.com/company/devopsaci'><StyledSingle>
                    <Image
                    src='/icons/linkedIn.svg'
                    width='16'
                    height='16'
                    alt='linkedIn-icon'
                    /><p>LinkedIn</p></StyledSingle></Link>
                       <Link href='/'><StyledSingle>
                    <Image
                    src='/icons/slack.svg'
                    width='16'
                    height='16'
                    alt='slack-icon'
                    /><p>Slack</p></StyledSingle></Link>
                       <Link href='https://www.facebook.com/devopsaci'><StyledSingle>
                    <Image
                    src='/icons/facebook.svg'
                    width='16'
                    height='16'
                    alt='facebook-icon'
                    /><p>Facebook</p></StyledSingle></Link>
                       <Link href='https://www.linkedin.com/company/devopsaci'><StyledSingle>
                    <Image
                    src='/icons/linkedIn.svg'
                    width='16'
                    height='16'
                    alt='linkedIn-icon'
                    /><p>LinkedIn group</p></StyledSingle></Link>
                       <Link href='https://airtable.com/shr1EV8xLC0bCW4df'><StyledSingle>
                    <Image
                    src='/icons/paper-plane.svg'
                    width='16'
                    height='16'
                    alt='newsletter-icon'
                    /><p>Newsletter</p></StyledSingle></Link>
                
            </StyledContainer>
        </StyledContent>
    )
}

export default Socials
