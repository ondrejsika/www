import styled from 'styled-components';

const StyledCopyright = styled.p`
font-size: 1.3rem;
text-align:center;
margin: 2rem 0;
color: ${props => props.theme.background};
@media (max-width: 520px) {
            margin: 1rem 0;
        }
`

const Copyright = () => {
    return (
        <StyledCopyright>Ondrej Sika | <span>{new Date().getFullYear()}</span></StyledCopyright>
    )
}

export default Copyright
