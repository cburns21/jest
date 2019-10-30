import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';


const themes = createMuiTheme({
    palette: {
        primary: {
            main: '#ffffff',
            contrastText: '#000000',
            button: ' #0298ff',
            error: '#FF0000'
        },
        secondary: {
            main: '#0298ff'
        }
        
        
    },
    props: {
        MuiButton: {
            disableRipple: true,
        }
    },
   
    
})


export default themes;