import React from 'react';
import { connect } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import Container from '../../components/Container';
import CssBaseLine from '../../components/CssBaseLine';
import { DarkTheme, LightTheme } from '../../components/ThemeConfig';
import { mapStateToProps } from './appSelector';

import Box from '../../components/Box';
import TodoForm from '../Todo/TodoForm';
import TodoList from '../Todo/TodoList';
import ToggleTheme from '../../components/ToggleTheme';

const App = ({ theme }) => {
  return (
    <ThemeProvider theme={theme === 'light' ? LightTheme : DarkTheme}>
      <Container>
        <Box>
          <ToggleTheme />
          <TodoForm />
          <TodoList />
        </Box>
        <CssBaseLine />
      </Container>
    </ThemeProvider>
  );
};

export default connect(mapStateToProps)(App);
