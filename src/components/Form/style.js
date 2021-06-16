import styled from 'styled-components';

export const FormContainer = styled.form`
    width:100%;
    margin-top:36px;
    display: flex;
    align-items: center;
    background: var(--bgColor);
    border-radius: 4px;
    position: relative;
    padding:0.75rem;
    @media (min-width:576px){
        padding:1.125rem;

    }
`

export const Input = styled.input`
    width:100%;
    background: transparent;
    color:var(--textColor);
    border:none;
    line-height: 26px;
    font-size:0.75rem;
    padding-left: 2.4rem;
    outline: none;
    position: relative;
    &::placeholder{
        color:var(--textColorSecondary);
    }
    @media (min-width:576px){
        font-size:1.125rem;
        padding-left: 3.2rem;
        
    }
`

export const Circle = styled.span`
        position:absolute;
        top:14px;
        left:18px;
        width:1.25rem;
        height:1.25rem;
        border:1px solid var(--textColorSecondary);
        background: transparent;
        border-radius:50%;
        @media (min-width:576px){
            top:16px;
            width:1.563rem;
            height:1.563rem;
    }
`