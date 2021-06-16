import styled from 'styled-components';

export const FooterContainer = styled.div`
    width:100%;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding:6rem 0;
    @media (min-width:576px){
        padding:3rem 0;
    }
`
export const Text = styled.h3`
    font-size:0.86rem;
    padding:0.5rem 0;
    color:var(--textColorSecondary);
`