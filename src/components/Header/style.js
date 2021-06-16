import styled from 'styled-components';

export const HeaderContainer = styled.div`
    width:100%;
    display:flex;
    align-items:center;
    justify-content: space-between;
`

export const Title = styled.h1`
    color:#fff;
    text-transform: uppercase;
        font-size:28px;
    font-weight:700;
    letter-spacing:0.8rem;
    @media (min-width:576px){
        font-size:42px;
    }
`
export const SwitchInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const SwitchImage = styled.span`
  position: absolute;
  top: -0.75rem;
  left: -1.25rem;
  height: 1.25rem;
  width: 1.25rem;
  background:url('/images/icon-sun.svg');
  background-size:contain;
  @media (min-width:576px){
    height: 1.6rem;
    width: 1.6rem;
    top:-1rem;
    left:-1.6rem;
  }
`
export const SwitchContainer = styled.label`
    display:block;
    position: relative;
    /* padding:1.125rem; */
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    
    input:checked ~ ${SwitchImage}{
        background: url('/images/icon-moon.svg');
        background-size:cover;
    }
`