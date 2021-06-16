import React, { useState } from 'react';
import { ListFooterContainer, ListFooterSpan, ListFooterButton, ListFooterMenu, MenuItem, MenuLink } from './style';

const ListFooter = ({ filterList, clearCompleted, count }) => {
    const [activeLink, setActiveLink] = useState("all");
    const handleClick = (filter) => {
        setActiveLink(filter);
        filterList(filter);
    }
    return (
        <ListFooterContainer>
            <ListFooterSpan>{count} items left</ListFooterSpan>
            <ListFooterMenu>
                <MenuItem><MenuLink className={activeLink === "all" ? "active" : ""} onClick={() => handleClick("all")}>All</MenuLink></MenuItem>
                <MenuItem><MenuLink className={activeLink === "active" ? "active" : ""} onClick={() => handleClick("active")}>Active</MenuLink></MenuItem>
                <MenuItem><MenuLink className={activeLink === "completed" ? "active" : ""} onClick={() => handleClick("completed")}>Completed</MenuLink></MenuItem>
            </ListFooterMenu>
            <ListFooterButton onClick={clearCompleted}>Clear Completed</ListFooterButton>
        </ListFooterContainer >
    )
}

export default ListFooter
