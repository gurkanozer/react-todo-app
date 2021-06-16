import React from 'react'
import { ListItemContainer, CloseButton, CheckboxContainer, CheckboxInput, Checkmark, CheckboxText } from './style';

const ListItem = ({ todo, onChange, provided, onClick }) => {
    return (
        <ListItemContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
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
