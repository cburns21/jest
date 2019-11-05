import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';


const themes = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff',
            contrastText: '#000000',
            button: ' #0298ff',
            error: '#FF0000',
            header: '#F1F2EB'
        },
        secondary: {
            main: '#0298ff'
        }
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
    },
    typography: {
        button: {
            textTransform: 'none'
        }
    },
   
   
    
})


export default themes;