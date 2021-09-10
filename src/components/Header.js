import React from 'react'
import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from '@material-ui/core'
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import ChatBubbleOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import SearchIcon from "@material-ui/icons/Search";

const useStyles=makeStyles({
    root:{
        backgroundColor:'#fff'
    },
    searchInput:{
        opacity:'0.6',
        padding:'0px 8px',
        fontSize:'0.8rem',
        '&:hover':{
            backgroundColor:'#f2f2f2'
        },
        '&.MuiSvgIcon-root':{
            marginRight:'8px'
        }
    }
})
export default function Header() {
    const classes=useStyles()
    return (
        <div>
            <AppBar position="static" 
            className={classes.root}
            >
                <Toolbar>
                    <Grid container>
                        <Grid item>
                            <InputBase
                            placeholder="Search athlete"
                            startAdornment={<SearchIcon fontSize="small"/>}/>
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            <IconButton>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsNoneIcon fontSize="small"/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={3} color="primary">
                                    <ChatBubbleOutlinedIcon fontSize="small"/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <PowerSettingsNewIcon/>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    )
}
