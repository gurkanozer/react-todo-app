import { CHANGE_THEME } from './actionTypes';
import { lightTheme, darkTheme } from './themes';
const themeChanger = (state, action) => {
    switch (action.type) {
        case CHANGE_THEME:
            if (action.payload === "light") {
                return { ...lightTheme };
            }
            else {
                return { ...darkTheme }
            }
        default:
            return state;
    }
}

export default themeChanger;