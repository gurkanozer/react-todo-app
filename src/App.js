import React, { useContext } from 'react';
import styled from 'styled-components';
import GlobalStyle from './components/globalStyle';
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';
import Footer from './components/Footer';

import { ThemeProvider } from "styled-components";
import { GlobalContext } from './context/globalState';
const Container = styled.div`
    max-width:576px;
    width:100%;
    height:300px;
    margin:2.875rem auto;
    padding:0 1.5rem;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    @media (min-width:576px){
        margin:4.75rem auto;
        padding:0 1.125rem;
    }
`

const App = () => {
    const { theme } = useContext(GlobalContext);
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <GlobalStyle />
                <Header />
                <Form placeholder="Create a new todo..." />

                <List />

                <Footer />
            </Container>
        </ThemeProvider >
    )
}

export default App
