import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const StyledWholeContainer = styled.div`
background-color: ${props => props.theme.blue};
`

const StyledContent = styled.div`
padding: 6rem 0;
width: 80%;
margin: 0 auto;
    h2 {
        color: white;
        margin-bottom: 6rem;
        @media (max-width: 600px) {
            margin-bottom: 3rem;
        }
    }
    @media (max-width: 992px) {
        width: 90%;
    }
    @media (max-width: 520px) {
            padding: 4rem 0;
        }

`
const StyledContainer = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
align-items:flex-start;
@media (max-width: 850px) {
        justify-content: center;
        grid-gap: 6rem;
        grid-template-columns: 400px;
    }
@media (max-width: 600px) {
            grid-gap: 4rem;
    }
    @media (max-width: 520px) {
            grid-template-columns: 1fr;
        }
`

const StyledPerson = styled.div`
display:flex;
flex-direction: column;
justify-content:center;
align-items:center;
    h3{
        margin-top: 2rem;
        font-size: 2.8rem;
        font-weight: normal;
        color: white;
        @media (max-width: 520px) {
            margin-top: 1.5rem;
        }
    }
`
const StyledImageContainer = styled.div`
        background-color: ${props => props.theme.grey};
        border-radius: 100%;
        width: 25rem;
        height: 25rem;
        display:flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;
        @media (max-width: 600px) {
            width: 20rem;
            height: 20rem;
    }
`
const StyledButton = styled.button`
border: none;
display: block;
margin: 2rem auto;
background-color: ${props => props.theme.white};
border-radius: 2rem;
padding:0.8rem 1.5rem;
color: ${props => props.theme.blue};
font-weight: bold;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
outline: none;
transition: 0.3s all ease-in-out;
&:hover {
     background-color: #d9d3c9;
     color: white;   
     
    }
@media (max-width: 520px) {
            margin: 1.5rem auto;
        }
`
const StyledPara = styled.p`
color: white;

`
const StyledInfoBottom = styled.div`
margin-top: 30rem;
display:flex;
justify-content: space-between;
align-items: flex-start;
    @media (max-width: 600px) {
        margin-top: 20rem;
            flex-direction: column;
            justify-content:center;
            align-items: center;
        }
`
const StyledNewsletter = styled.div`
display: flex;
flex-direction: column;
justify-content:center;
align-items: center;
    h3{
        color: white;
        font-size: 3rem;
        @media (max-width: 600px) {
            font-size: 2.8rem;
        }
    }
    @media (max-width: 600px) {
            margin-bottom: 6rem;
        }
`
const StyledNewsletterButton = styled.button`
border: none;
background-color: ${props => props.theme.grey};
margin-top: 2rem;
border-radius: 2rem;
padding:1.5rem 4rem;
color: ${props => props.theme.blue};
font-weight: bold;
font-size: 2.2rem;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
outline: none;
transition: 0.3s all ease-in-out;
    &:hover {
     background-color: #d9d3c9;
     color: white;
    }
    @media (max-width: 400px) {
            font-size: 2rem;
            padding: 1.5rem 3rem;
        }
`

const InfoSection = () => {

    return (
        <StyledWholeContainer>
        <StyledContent>
            <h2>Organizátoři</h2>
            <StyledContainer>
            <StyledPerson>
                <StyledImageContainer>
                <Image
                    src='/photos/ondrejsika.png'
                    width='250'
                    height='250'
                    objectFit='contain'
                    alt='ondrej-sika-foto'
                    ></Image>
                </StyledImageContainer>
                <h3>Ondřej Šika</h3>
                <Link href='https://twitter.com/ondrejsika'><StyledButton>@ondrejsika</StyledButton></Link>
                <StyledPara>Jsem freelance DevOps konzultant a lektor. Zlepšuji práci vývojářských týmů zaváděním efektivních procesů ve vývoji.</StyledPara>
            </StyledPerson>
            <StyledPerson>
                <StyledImageContainer>
                <Image
                    src='/photos/martin.png'
                    width='250'
                    height='250'
                    objectFit='contain'
                    alt='martin-jurco-foto'
                    ></Image>
                </StyledImageContainer>
                <h3>Martin Jurčo</h3>
                <Link href='https://twitter.com/martinjurco'>
                    <StyledButton>@martinjurco</StyledButton></Link>
                <StyledPara>COO & CMO @ SikaLabs.</StyledPara>
            </StyledPerson>
            <StyledPerson>
                <StyledImageContainer>
                <Image
                    src='/photos/vojtechmares.png'
                    width='250'
                    height='250'
                    objectFit='contain'
                    alt='vojtech-mares-foto'
                    ></Image>
                </StyledImageContainer>
                <h3>Vojtěch Mareš</h3>
                <Link href='https://twitter.com/vojtechmares_'><StyledButton>@vojtechmares_</StyledButton></Link>
                <StyledPara>Freelance software vývojář, DevOps konzultant a lektor. Pomůžu vám s řešením infrastruktury, vývojem aplikace až po její nasazení do cloudového prostředí například v Kubernetes.</StyledPara>
            </StyledPerson>
            </StyledContainer>
            <StyledInfoBottom>
                <StyledNewsletter>
                    <h3>Buďte v obraze</h3>
                    <Link href='https://airtable.com/shr0LR5JxxeGSnNPT'><StyledNewsletterButton>Chci dostávat novinky</StyledNewsletterButton></Link>
                </StyledNewsletter>
                <div>
                    <Image src='/icons/paper-plane2.svg' width='200' height='200' alt='paper-plane' />
                </div>
            </StyledInfoBottom>
        </StyledContent>
        </StyledWholeContainer>
    )
}

export default InfoSection
