import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

const StyledContent = styled.div`
padding: 6rem 0;
width: 80%;
margin: 0 auto;
    @media (max-width: 520px) {
            padding: 4rem 0;
        }
    h2 {
        color: ${props => props.theme.background};
        text-align: unset;
        margin-bottom: 2rem;
        @media (max-width: 600px) {
            text-align: center;
    }
    }
    div {
        @media (max-width: 600px) {
            display: flex;
            justify-content: center;
            align-items:center;
    }
    }
    .sponzor-logo{
        width:20rem;
        height: auto;
        margin-right: 2rem;
        transition: 0.5s transform ease;
        cursor: pointer;
        &:hover {
        transform:scale(1.05);
        }
        @media (max-width: 600px) {
            width: 18rem;
            margin:0 1rem;
        }
        @media (max-width: 400px) {
            width: 15rem;
        }
        @media (max-width: 320px) {
            width: 13rem;
        }
    }
`

const Sponsors = () => {
    return (
        <StyledContent>
            <h2>Sponzoři</h2>
            <div>
            <Link href='https://sikalabs.com/'><img src='/photos/sponzor1.jpg' className='sponzor-logo' alt='sikalabs-logo'></img></Link>
            <Link href='https://trainera.cz/'><img src='/photos/sponzor2.jpg' className='sponzor-logo' alt='trainera-logo' /></Link>
            </div>
        </StyledContent>
    )
}

export default Sponsors
