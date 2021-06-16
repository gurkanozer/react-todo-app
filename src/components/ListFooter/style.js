import styled from 'styled-components';

export const ListFooterContainer = styled.div`
    width:100%;
    padding:1rem 1.25rem;
    display:flex;
    justify-content:space-between;
    align-items:center;
    position:relative;
`

export const ListFooterSpan = styled.span`
    font-size:0.75rem;
    color:var(--textColorSecondary);

`

export const ListFooterButton = styled.button`
    border:none;
    outline:none;
    background:transparent;
    cursor:pointer;
    font-size:0.75rem;
    color:var(--textColorSecondary);
    transition:all .3s ease;
    &:hover{
        color:var(--textColor);
    }
`

export const ListFooterMenu = styled.ul`
    width:100%;
    background:var(--bgColor);
    position:absolute;
    top:3.8rem;
    left:0;
    list-style:none;
    border-radius:4px;
    padding:1rem;
    display:flex;
    align-items: center;
    justify-content: center;

    @media (min-width:576px){
        position:relative;
        top:auto;
        left:auto;
        width:auto;
        padding:0;
    }
`

export const MenuItem = styled.li`
    color:var(--textColor);
    margin-right:1.125rem;
    &::last-child{
    margin-right:0;
    font-size:1.125rem;
    }
`

export const MenuLink = styled.a`
    color:inherit;
    font-size:1rem;
    cursor:pointer;
    &.active,
    &:hover{
        color:var(--brightBlue);
    }
`