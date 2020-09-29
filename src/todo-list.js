import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Checkbox from '@material-ui/core/Checkbox';
import Divider from '@material-ui/core/Divider';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles } from '@material-ui/core/styles';
import TodoForm from './todo-form';

const useStyles = makeStyles({
    text: {
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis'
    }
});

function TodoList(props) {
    const classes = useStyles();
    const [selectedTodo, setSelectedTodo] = useState(null);
    const handleSave = item => {
        setSelectedTodo(null);
        props.handleSave(item);
    };
    return (
        <List style={{ flex: 1, minHeight: 0, overflow: 'auto' }}>
            {
                props.todos.map(item =>
                    <React.Fragment key={item.id}>
                        <ListItem>
                            <ListItemIcon>
                                <Checkbox
                                    edge='start'
                                    tabIndex={-1}
                                    disableRipple
                                    checked={item.completed}
                                    onChange={() => props.handleCheckChange(item)}
                                />
                            </ListItemIcon>
                            {
                                selectedTodo === item ?
                                    <ListItemText><TodoForm selectedTodo={selectedTodo} handleSave={handleSave} /></ListItemText> :
                                    <ListItemText classes={{ primary: classes.text }} style={{ textDecoration: item.completed && 'line-through' }}>{item.text}</ListItemText>
                            }
                            <IconButton onClick={() => selectedTodo === item ? setSelectedTodo(null) : setSelectedTodo(item)}>
                                <EditIcon />
                            </IconButton>
                            <IconButton edge='end' onClick={() => props.handleDelete(item)}>
                                <DeleteIcon />
                            </IconButton>
                        </ListItem>
                        <Divider />
                    </React.Fragment>
                )
            }
        </List>
    );
}

export default TodoList;