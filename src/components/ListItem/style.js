import styled from 'styled-components';

export const ListItemContainer = styled.div`
    width:100%;
    padding:1rem 1.125rem;
    border-bottom: 1px solid  var(--textColor);
    display:flex;
    justify-content: space-between;
    align-items: center;
    @media (min-width:768px){
      padding:1.25rem 1.125rem;
    }
`

export const CloseButton = styled.button`
    border:none;
    outline:none;
    width:18px;
    height:18px;
    background:url('/images/icon-cross.svg') no-repeat center center/1.125rem 1.125rem;
    color:var(--textColorSecondary);
    cursor:pointer;
    border-radius:50%;
    transition: .4s;
    @media (min-width:576px){
        width:24px;
        height:24px;
    }
`

/****CHECKBOX */
export const CheckboxInput = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`

export const Checkmark = styled.span`
  position: absolute;
  top: -3px;
  left: 0;
  width:1.25rem;
  height:1.25rem;
  border-radius:50%;
  background:transparent;
  border:1px solid var(--textColorSecondary);
  &:after {
    content: url('/images/icon-check.svg');
    position: absolute;
    display: none;
  }
  @media (min-width:576px){
        width:1.563rem;
        height:1.563rem;
  }
`
export const CheckboxText = styled.span`
  font-size: 0.75rem;
  @media (min-width:576px){
        font-size:18px;
        padding-left: 1.125rem;
    }
`
export const CheckboxContainer = styled.label`
  display:block;
  position: relative;
  padding-left:2rem;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color:var(--textColor);  
  &:hover input ~ ${Checkmark} {
    background:transparent;
  }
  input:checked ~ ${Checkmark} {
    background: var(--checkBg);
    border:none;
  }
  input:checked ~ ${CheckboxText}{
    color:var(--textColorSecondary);
    text-decoration:line-through;
  }
  input:checked ~ ${Checkmark}:after {
    display: block;
  }
  ${Checkmark}:after {
    left:0.25rem;
    top:0.2rem;
    @media (min-width:576px){
        left: 0.425rem;
        top: 0.425rem;
    }
  }
`