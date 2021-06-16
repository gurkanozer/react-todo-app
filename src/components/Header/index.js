import React, { useContext } from 'react';
import {
    HeaderContainer, Title,
    SwitchContainer, SwitchInput, SwitchImage
} from './style';
import { GlobalContext } from '../../context/globalState';

const Header = () => {
    const { changeTheme, theme } = useContext(GlobalContext);
    const handleChangeTheme = () => {
        changeTheme(theme.name === "light" ? "dark" : "light");
    }
    return (
        <HeaderContainer>
            <Title>TODO</Title>
            <SwitchContainer>
                <SwitchInput onChange={handleChangeTheme} checked={theme.name === "light"} />
                <SwitchImage />
            </SwitchContainer>
        </HeaderContainer>
    )
}

export default Header
