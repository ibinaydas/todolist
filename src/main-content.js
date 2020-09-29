import React, { useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { makeStyles } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import TodoList from './todo-list';
import TodoForm from './todo-form';
import { ThemeContext } from './hooks/themeContext';
import useLocalStorageState from './hooks/useLocalStorageState';

const useStyles = makeStyles(() => ({
    root: {
        flex: 1,
        minHeight: 0,
        minWidth: 300,
        display: 'flex',
        alignItems: 'center',
        boxSizing: 'border-box'
    }
}));

function MainContent() {
    const classes = useStyles();
    const [todoList, setTodoList] = useLocalStorageState('todo-list', []);
    const { isDarkTheme } = useContext(ThemeContext);
    const handleSave = item => {
        if (item.id) {
            setTodoList(todoList.map(todo => todo.id === item.id ? item : todo));
        } else {
            setTodoList([...todoList, { id: uuid(), text: item.text, completed: false }]);
        }
    };
    const handleDelete = item => {
        const updatedList = todoList.filter(todo => todo.id !== item.id);
        setTodoList(updatedList);
    };
    const handleCheckChange = item => {
        const updatedList = todoList.map(todo => todo.id === item.id ? { ...todo, completed: !todo.completed } : todo);
        setTodoList(updatedList);
    };
    return (
        <Box className={classes.root} paddingX={[1, 4, 16, 32, 64]} paddingY={2} bgcolor={isDarkTheme ? 'text.primary' : 'info.main'} >
            <Paper className='App-paper' style={{ paddingBottom: todoList.length > 0 ? '8px' : '16px' }}>
                <TodoList todos={todoList} handleSave={handleSave} handleDelete={handleDelete} handleCheckChange={handleCheckChange} />
                <TodoForm handleSave={handleSave} />
            </Paper>
        </Box>
    );
}

export default MainContent;