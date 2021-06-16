import React, { useContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import {
    FormContainer, Input, Circle
} from './style';

import { GlobalContext } from '../../context/globalState';

const Form = ({ placeholder }) => {
    const [text, setText] = useState("");
    const { addTodo } = useContext(GlobalContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text !== "" && text.trim() !== "")
            addTodo({ text, id: uuidv4(), checked: false });
        setText("");
    }
    const handleChange = (e) => {
        setText(e.target.value)
    }
    return (
        <FormContainer onSubmit={handleSubmit} >
            <Circle />
            <Input value={text} onChange={handleChange} placeholder={placeholder} />
        </FormContainer>
    )
}

export default Form;
