import { AppBar, Box, Switch, ToggleButton, ToggleButtonGroup, Toolbar, Typography, colors } from "@mui/material";
import { NavLink } from "react-router-dom";

interface Props {
    darkMode: boolean;
    themeChange: () => void;
}



export default function Header({darkMode, themeChange}: Props) {
    return (
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar sx={{display:'flex', justifyContent: 'space-between', alignItems:'center'}}>
                <Box display='flex'>
                <Typography variant="h4" component={NavLink}
                    to='/'
                    sx={{color:'inherit', textDecoration: 'none'}}>
                    Shop
                </Typography>
                <Switch checked={darkMode} onChange={themeChange}/>
                </Box>
                <Typography component={NavLink}
                    to='/about'
                    sx={{color:'inherit', textDecoration: 'none'}}
                >
                    <h2>ABOUT</h2>
                </Typography>
                <Box display='flex'>
                <Typography component={NavLink}
                    to='/login'
                    sx={{color:'inherit', textDecoration: 'none'}}
                >
                    <h2>LOGIN</h2>
                </Typography>
                <Typography component={NavLink}
                    to='/register'
                    sx={{color:'inherit', textDecoration: 'none', marginLeft:'25px'}}
                >
                    <h2>REGISTER</h2>
                </Typography>
                </Box>
            </Toolbar>
        </AppBar>
    )
}