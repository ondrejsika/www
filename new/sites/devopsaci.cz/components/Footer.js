import styled from 'styled-components';

const StyledContainer = styled.div`
padding: 6rem 0;
background-color: ${props => props.theme.background};
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    @media (max-width: 520px) {
            padding: 4rem 0;
        }
    img {
        width: 10rem;
        margin-bottom: 1rem;
        @media (max-width: 520px) {
            width: 8rem;
        }
    }
    span{
        color: ${props => props.theme.white};
    }
`

const Footer = () => {
    return (
        <StyledContainer>
            <img src='icons/logo.svg' alt='devopsaci-logo'></img>
            <h1>Devops<span>áci</span></h1>
        </StyledContainer>
    )
}

export default Footer
