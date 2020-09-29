import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Switch from '@material-ui/core/Switch';
import Select from '@material-ui/core/Select';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { LanguageContext } from './hooks/languageContext';
import { ThemeContext } from './hooks/themeContext';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        textAlign: 'center',
        whiteSpace: 'nowrap',
        textTransform: 'uppercase'
    },
    toggleLabel: {
        minWidth: '6rem',
        [theme.breakpoints.down('xs')]: {
            display: 'none'
        }
    },
    formLabel: {
        marginRight: 0
    },
    formControl: {
        minWidth: 85,
        marginLeft: '0.5rem'
    },
    lightLabel: {
        color: 'white'
    },
    darkLabel: {
        color: 'black'
    }
}));

const languageData = {
    english: {
        todoListText: 'Todo List',
        lightText: 'Light',
        darkText: 'Dark'
    },
    french: {
        todoListText: 'Lista de quehaceres',
        lightText: 'Lumière',
        darkText: 'Sombre'
    },
    german: {
        todoListText: 'Aufgabenliste',
        lightText: 'Licht',
        darkText: 'Dunkel'
    }
};

function NavBar() {
    const classes = useStyles();
    const { lang, changeLang } = useContext(LanguageContext);
    const { isDarkTheme, toggleTheme } = useContext(ThemeContext);
    const { todoListText, lightText, darkText } = languageData[lang];
    const labelClass = isDarkTheme ? classes.lightLabel : classes.darkLabel;
    return (
        <Box bgcolor={isDarkTheme ? 'text.secondary' : 'white'}>
            <AppBar position='static' color='transparent'>
                <Toolbar>
                    <FormControlLabel
                        control={<Switch checked={isDarkTheme} onChange={toggleTheme} name='themeToggle' />}
                        label={isDarkTheme ? darkText : lightText}
                        classes={{ root: classes.formLabel, label: classes.toggleLabel + ' ' + labelClass }}
                    />
                    <Typography variant='h6' className={classes.title + ' ' + labelClass}>
                        {todoListText}
                    </Typography>
                    <FormControl className={classes.formControl}>
                        <Select
                            value={lang}
                            onChange={changeLang}
                            classes={{ root: labelClass, icon: labelClass }}
                            disableUnderline
                        >
                            <MenuItem value='english'>English</MenuItem>
                            <MenuItem value='french'>French</MenuItem>
                            <MenuItem value='german'>German</MenuItem>
                        </Select>
                    </FormControl>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;