import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { fontSize } from '@material-ui/system';


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
            main: '#0078e7'
        }
    },
    props: {
        MuiButtonBase: {
            disableRipple: true,
        },
    },
    typography: {
        button: {
            textTransform: 'none',
            fontSize: '13px',
            fontFamily: "proxima-nova, arial, sans-serif",
            marginRight: "20px"
        }
    },
   
   
    
})


export default themes;