import React, { useContext, useState, useEffect } from 'react'
import { ListContainer } from './style';
import ListItem from '../ListItem';
import ListFooter from '../ListFooter';
import { GlobalContext } from '../../context/globalState';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const List = () => {
    const { deleteTodo, updateTodo, clearCompleted, reorderTodos, todos } = useContext(GlobalContext);
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
    const handleOnDragEnd = (result) => {
        reorderTodos(result);
    }
    useEffect(() => {
        setTodoList(todos);
    }, [todos]);
    return (
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <Droppable droppableId="todos">
                {(provided) => (
                    <ListContainer  {...provided.droppableProps} ref={provided.innerRef}>
                        {todoList.map((todo, index) => (

                            <Draggable key={todo.id} draggableId={todo.id} index={index}>
                                {(provided) => (
                                    <ListItem provided={provided} todo={todo} onChange={handleChange} onClick={handleDelete} key={index} />
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        <ListFooter filterList={handleFilter} clearCompleted={handleClearCompleted} count={todos.length} />
                    </ListContainer>
                )}
            </Droppable>
        </DragDropContext>
    )
}

export default List
