import { DarkMode } from "@mui/icons-material";
import { AppBar, Switch, ToggleButton, ToggleButtonGroup, Toolbar, Typography } from "@mui/material";

interface Props {
    darkMode: boolean;
    themeChange: () => void;
}

export default function Header({darkMode, themeChange}: Props) {
    return (
        <AppBar position="static" sx={{mb:4}}>
            <Toolbar>
                <Typography variant="h4">
                    Shop
                </Typography>
                <Switch checked={darkMode} onChange={themeChange}/>
            </Toolbar>
        </AppBar>
    )
}