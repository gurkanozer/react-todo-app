import React, { useContext, useState, useEffect } from 'react'
import { ListContainer } from './style';
import ListItem from '../ListItem';
import ListFooter from '../ListFooter';
import { GlobalContext } from '../../context/globalState';

const List = () => {
    const { deleteTodo, updateTodo, clearCompleted, todos } = useContext(GlobalContext);
    const [todoList, setTodoList] = useState(todos);
    const handleChange = (data) => {
        let updatedTodo = { ...data, checked: !data.checked };
        updateTodo(updatedTodo);
    }
    const handleDelete = (id) => {
        deleteTodo(id);
    }
    const handleClearCompleted = () => {
        clearCompleted();
    }
    const handleFilter = (filter) => {
        let filtered = [];
        if (filter === "all")
            setTodoList(todos);
        else if (filter === "completed") {
            filtered = todos.filter(t => t.checked);
            setTodoList(filtered);

        } else if (filter === "active") {
            filtered = todos.filter(t => !t.checked);
            setTodoList(filtered);
        }
    }

    useEffect(() => {
        setTodoList(todos);
    }, [todos]);
    return (
        <ListContainer>
            {todoList.map((todo, index) => (
                <ListItem todo={todo} onChange={handleChange} onClick={handleDelete} key={index} />
            ))}
            <ListFooter filterList={handleFilter} clearCompleted={handleClearCompleted} count={todos.length} />
        </ListContainer>
    )
}

export default List
