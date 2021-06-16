import React from 'react'
import { ListItemContainer, CloseButton, CheckboxContainer, CheckboxInput, Checkmark, CheckboxText } from './style';

const ListItem = ({ todo, onChange, onClick }) => {
    return (
        <ListItemContainer>
            <CheckboxContainer>
                <CheckboxInput onChange={() => onChange(todo)} checked={todo.checked} />
                <Checkmark />
                <CheckboxText>{todo.text}</CheckboxText>
            </CheckboxContainer>
            <CloseButton onClick={() => onClick(todo.id)} />
        </ListItemContainer>
    )
}

export default ListItem
