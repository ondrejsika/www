import styled from 'styled-components';
import Image from 'next/image';

const StyledHeader = styled.div`
background-color: ${props => props.theme.background};
text-align: center;
    div {
        padding: 4rem 0;
        display: flex;
        justify-content: center;
        align-items: center;
        @media (max-width: 520px) {
            padding: 3rem 0;    
        }
        img {
            width: 8rem;
            margin-right: 2rem;
            @media (max-width: 600px) {
            width: 7rem;
            margin-right: 1.5rem;
        }
        }
    }
    p {
        padding-bottom:4rem;
        font-weight: normal;
        font-size: 3rem;
        color: ${props => props.theme.white};
        @media (max-width: 600px) {
            font-size: 2.5rem;
        }
        @media (max-width: 520px) {
            padding-bottom: 3rem;    
        }
    }
`

const StyledSpan = styled.span`
color: ${props => props.theme.white};
`
const Header = () => {
    return (
        <StyledHeader>
            <div>
                <img src='icons/logo.svg' alt='devopsaci-logo'></img>
                <h1>Devops<StyledSpan>áci</StyledSpan></h1>
            </div>
            <p>česká komunita lidí z DevOps</p>
        </StyledHeader>
    )
}

export default Header
