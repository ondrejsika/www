import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const StyledContent = styled.div`
margin: 6rem 0;
    @media (max-width: 520px) {
            margin: 4rem auto;
        }
`
const StyledGrid = styled.div`
display:flex;
justify-content:center;
align-items: flex-start;
@media (max-width: 992px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
        justify-items: center;
        grid-gap: 2rem;
        width: 80%;
        margin: 0 auto;
    }
    @media (max-width: 600px) {
            grid-gap: 1rem;
        }
        @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
`

const StyledDiv = styled.div`
background-color: ${props => props.theme.background};
width:20rem;
padding:4rem 2rem;
border-radius: 3rem;
margin: 0 0.5rem;
    @media (max-width: 992px) {
        width:unset;
        min-width: 20rem;
    }
    @media (max-width: 520px) {
            min-width: 20rem;
            max-width: 90%;

        }
    h3{
        @media (max-width: 520px) {
           text-align: center;

        }
    }
    p{
        margin: 2rem 0;
        font-family: ${props => props.theme.secondaryFont};
        font-size: 1.6rem;
        color: ${props => props.theme.white};
    }
    
`
const StyledButton = styled.button`
border: none;
display: block;
margin: 4rem auto 0 auto;
background-color: ${props => props.theme.white};
border-radius: 2rem;
padding:0.8rem 1.5rem;
color: ${props => props.theme.background};
font-family: ${props => props.theme.secondaryFont};
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
outline: none;
transition: 0.3s all ease;
    &:nth-of-type(2) {
        margin: 1rem auto 0 auto;
    }
    &:hover {
     background-color: ${props => props.theme.red};   
     color: ${props => props.theme.white};
    }
    img{
        width:2rem;
    }
    
`

const Meetups = () => {
    return (
        <StyledContent>
            <h2>Naše meetupy</h2>
            <StyledGrid>
                <StyledDiv>
                    <h3>Cloud Native Prague</h3>
                    <p>We are a group of enthusiasts of cloud native solutions from Prague and we believe there is more of us out there! We want to meet you all. Let's build a strong, cloud-native community to share experiences, learn from one another and talk about our successes and fuck-ups.</p>
                    <Link href='https://twitter.com/CloudNativePrg'><StyledButton>@CloudNativePrg</StyledButton></Link>
                    <Link href='https://www.meetup.com/Cloud-Native-Prague/'><StyledButton><Image
                    src='/icons/Meetup_Logo.png'
                    width='20'
                    height='20'
                    alt='Meetup-logo'
                    ></Image>Meetup.com</StyledButton></Link>
                </StyledDiv>
                <StyledDiv>
                    <h3>Prague Containers</h3>
                    <p>This is a group to share knowledge about latest and greatest container technologies (docker, rkt, cri-o), tools and systems around it like orchestrators (kubernetes, swarm, mesos, nomad, ...), image builders, ci tooling...</p>
                    <Link href='https://prgcont.cz/'><StyledButton>prgcont.cz</StyledButton></Link>
                    <Link href='https://www.meetup.com/Prague-Containers-Meetup/'><StyledButton><Image
                    src='/icons/Meetup_Logo.png'
                    width='20'
                    height='20'
                    alt='Meetup-logo'
                    ></Image>Meetup.com</StyledButton></Link>
                </StyledDiv>
                <StyledDiv>
                    <h3>DigitalOcean Czech Community</h3>
                    <p>Komunita lidí a firem co používají DigitalOcean.</p>
                    <Link href='https://digitalocean.cz/'><StyledButton>digitalocean.cz</StyledButton></Link>
                </StyledDiv>
                <StyledDiv>
                    <h3>HashiCorp Czech Community</h3>
                    <p>Komunita lidí a firem co používají Terraform, Vault, Consul, Packer, ...</p>
                    <Link href='https://hashicorp.cz/'><StyledButton>haspicorp.cz</StyledButton></Link>
                </StyledDiv>
            </StyledGrid>
        </StyledContent>
    )
}

export default Meetups
