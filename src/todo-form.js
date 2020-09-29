import React, { useContext } from 'react';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import useInputState from './hooks/useInputState';
import { LanguageContext } from './hooks/languageContext';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        margin: '0.5rem 1rem',
        justifyContent: props => props.selectedTodo ? 'initial' : 'center'
    }
});

const languageData = {
    english: {
        todoLabelText: 'Todo',
        addTodoText: 'Add Todo',
        saveTodoText: 'Save'
    },
    french: {
        todoLabelText: 'Faire',
        addTodoText: 'Ajouter Todo',
        saveTodoText: 'Sauvegarder'
    },
    german: {
        todoLabelText: 'Machen',
        addTodoText: 'Fügen Sie Todo hinzu',
        saveTodoText: 'Speichern'
    }
};

function TodoForm(props) {
    const classes = useStyles(props);
    const { lang } = useContext(LanguageContext);
    const initialVal = props.selectedTodo?.text || '';
    const [todoText, setTodoText, clearTodoText] = useInputState(initialVal);
    const { todoLabelText, addTodoText, saveTodoText } = languageData[lang];
    const handleSubmit = evt => {
        evt.preventDefault();
        const todoItem = props.selectedTodo ? { ...props.selectedTodo, text: todoText } : { text: todoText };
        props.handleSave(todoItem);
        clearTodoText();
    };
    return (
        <form
            noValidate
            autoComplete='off'
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <TextField
                value={todoText}
                label={todoLabelText}
                onChange={setTodoText}
                autoFocus={!!props.selectedTodo}
                variant={props.selectedTodo ? 'standard' : 'outlined'}
            />
            <Box component='span' ml={2}>
                <Button type='submit' variant='contained' color='primary' disabled={!todoText}>{props.selectedTodo ? saveTodoText : addTodoText}</Button>
            </Box>
        </form>
    );
}

export default TodoForm;