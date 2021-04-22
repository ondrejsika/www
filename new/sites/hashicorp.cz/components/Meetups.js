import React from 'react'
import styled from 'styled-components';

const StyledContent = styled.div`
margin: 6rem auto;
width: 70%;
    @media(max-width: 600px) {
        width: 80%;
    }
        @media (max-width: 520px) {
            margin: 4rem auto;
        }
        p{
            color: ${props => props.theme.blue};
        }
`
const StyledGrid = styled.div`
display: grid;
grid-template-columns: 30% 30% 40%;
@media (max-width: 600px) {
    grid-template-columns: 25% 25% 50%;
}
@media (max-width: 520px) {
    grid-template-columns: 1fr;
}

`

const StyledContainer = styled.div`
margin-top: 2rem;
        h3{
            padding-bottom: 0.5rem;
            border-bottom: 3px solid ${props => props.theme.blue};
            color: ${props => props.theme.blue};
        }
        p{
            margin-top: 1rem;
        }
        span {
            font-weight: bold;
        }
`

const Meetups = () => {
    return (
        <StyledContent>
            <h2>Naše meetupy</h2>
            <StyledGrid>
                <StyledContainer>
                    <h3>kdy</h3>
                    <p>22. 1. 2021</p>
                </StyledContainer>
                <StyledContainer>
                    <h3>kde</h3>
                    <p>Liberec</p>
                </StyledContainer>
                <StyledContainer>
                    <h3>přednášky</h3>
                    <p><span>Start HashiCorp Czech Community</span> (Ondrej Sika) 10min Úvodní slovo ke startu meetupu HashiCorp Czech Community.</p>
                    <p><span>Terraform a Vault</span> (Ondřej Šika) 40min Ukázka jak integrovat Terraform s Vaultem a co z toho plyne za výhody.</p>
                </StyledContainer>
            </StyledGrid>
        </StyledContent>
    )
}

export default Meetups
