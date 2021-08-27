import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Avatar, makeStyles } from '@material-ui/core';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import { compareAsc, format } from 'date-fns'


const drawerWidth = 220

const useStyles = makeStyles((theme) => {
    return {
        title: {
            padding: theme.spacing(2)
        },
        root: {
            display: "flex"
        },
        drawer: {
            width: drawerWidth
        },
        page: {
            backgroundColor: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },
        active: {
            background: "#f4f4f4"
        },
        toolbar: theme.mixins.toolbar,
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        date: {
            flexGrow: 1
        },
        avatar: {
            marginLeft: theme.spacing(2)
        },
        drawerPaper: {
            width: drawerWidth
        },
    }

})

export default function Layout({ children }) {
    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems = [
        {
            title: "My Notes",
            icon: <SubjectOutlined color="secondary" />,
            path: "/"
        },
        {
            title: "Create Notes",
            icon: <AddCircleOutlineOutlined color="secondary" />,
            path: "/create"
        }
        
    ]


    return (


        <div className={classes.root}>
            {/* appbar  */}
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar>
                    <Typography variant="h6" classname={classes.date}>
                        Today is { format(new Date(), 'do MMMM Y')}
                    </Typography>
                    <Typography>
                        David's Note
                    </Typography>
                    <Avatar src="/avatar.png" className={classes.avatar} />
                </Toolbar>
            </AppBar>
            {/* sidedraw  */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{
                    paper: classes.drawerPaper,
                }}

            >
                <div>
                    <Typography variant="h5" className={classes.title}>
                        David's Note
                    </Typography>
                </div>

                <List>
                    {menuItems.map((item) => (
                        <ListItem key={item.title} button onClick={() => history.push(item.path)} className={location.pathname == item.path ? classes.active : null}>
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    ))}
                </List>

            </Drawer>
            <div className={classes.page}>
            <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}