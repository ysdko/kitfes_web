// import React from 'react';
// import clsx from 'clsx';
// import { makeStyles, useTheme, fade } from '@material-ui/core/styles';
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import List from '@material-ui/core/List';
// import Typography from '@material-ui/core/Typography';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// // import ListItem from '@material-ui/core/ListItem';
// // import ListItemIcon from '@material-ui/core/ListItemIcon';
// // import ListItemText from '@material-ui/core/ListItemText';
// // import InboxIcon from '@material-ui/icons/MoveToInbox';
// // import MailIcon from '@material-ui/icons/Mail';
// import Button from '@material-ui/core/Button';
// import SearchIcon from '@material-ui/icons/Search';
// import InputBase from '@material-ui/core/InputBase';

// const drawerWidth = 200;

// const useStyles = makeStyles(theme => ({
//   root: {
//     display: 'flex',
//   },
//   appBar: {
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//   },
//   appBarShift: {
//     width: `calc(100% - ${drawerWidth}px)`,
//     marginLeft: drawerWidth,
//     transition: theme.transitions.create(['margin', 'width'], {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   hide: {
//     display: 'none',
//   },
//   drawer: {
//     width: drawerWidth,
//     flexShrink: 0,
//   },
//   drawerPaper: {
//     width: drawerWidth,
//     backgroundColor: "white"
//   },
//   drawerHeader: {
//     display: 'flex',
//     alignItems: 'center',
//     padding: theme.spacing(0, 1),
//     ...theme.mixins.toolbar,
//     justifyContent: 'flex-end',
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.sharp,
//       duration: theme.transitions.duration.leavingScreen,
//     }),
//     marginLeft: -drawerWidth,
//   },
//   contentShift: {
//     transition: theme.transitions.create('margin', {
//       easing: theme.transitions.easing.easeOut,
//       duration: theme.transitions.duration.enteringScreen,
//     }),
//     marginLeft: 0,
//   },
//   	search: {
// 		position: 'relative',
// 		borderRadius: theme.shape.borderRadius,
// 		backgroundColor: fade(theme.palette.common.white, 0.15),
// 		'&:hover': {
// 			backgroundColor: fade(theme.palette.common.white, 0.25),
// 		},
// 		marginLeft: 0,
// 		width: '40%',
// 		[theme.breakpoints.up('sm')]: {
// 			marginLeft: theme.spacing(1),
// 			width: 'auto',
// 		},
// 	},
// 	searchIcon: {
// 		width: theme.spacing(7),
// 		height: '100%',
// 		position: 'absolute',
// 		pointerEvents: 'none',
// 		display: 'flex',
// 		alignItems: 'center',
// 		justifyContent: 'center',
// 	},
// 	inputRoot: {
// 		color: 'inherit',
// 	},
// 	inputInput: {
// 		padding: theme.spacing(1, 1, 1, 7),
// 		transition: theme.transitions.create('width'),
// 		width: '100%',
// 		[theme.breakpoints.up('sm')]: {
// 			width: 120,
// 			'&:focus': {
// 				width: 200,
// 			},
// 		},
// 	},
// }));

// export default function Menu() {
//   const classes = useStyles();
//   const theme = useTheme();
//   const [open, setOpen] = React.useState(false);

//   const handleDrawerOpen = () => {
//     setOpen(true);
//   };

//   const handleDrawerClose = () => {
//     setOpen(false);
//   };

//   return (
//     <div className={classes.root} style={{ marginBottom: 80 }}>
//       <CssBaseline />
//       <AppBar
//         position="fixed"
//         className={clsx(classes.appBar, {
//           [classes.appBarShift]: open,
//         })}
//         style={{ backgroundColor: '#1C1C1C' }}
//       >
//         <Toolbar >
//           <IconButton
//             color="inherit"
//             aria-label="open drawer"
//             onClick={handleDrawerOpen}
//             edge="start"
//             className={clsx(classes.menuButton, open && classes.hide)}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Button color="inherit"  href="/">
//             <Typography variant="h6" noWrap>第60回工大祭
//           </Typography></Button>
//           <div className={classes.search}>
//  						<div className={classes.searchIcon}>
// 							<SearchIcon />
//  						</div>
//  						<InputBase
// 							// placeholder="Search…"
// 							classes={{
// 								root: classes.inputRoot,
// 								input: classes.inputInput,
// 							}}
// 							inputProps={{ 'aria-label': 'search' }}
// 						/>
// 					</div>
//         </Toolbar>
//       </AppBar>
//       <Drawer
//         className={classes.drawer}
//         variant="persistent"
//         anchor="left"
//         open={open}
//         classes={{
//           paper: classes.drawerPaper,
          
//         }}
//         style={{ backgroundColor: "brack" }}
//       >
//         <div className={classes.drawerHeader} style={{backgroundColor:"brack"}}>
//           <IconButton onClick={handleDrawerClose}>
//             {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
//           </IconButton>
//         </div>
//         <Divider />
//         <List style={{ backgroundColor: "brack" }}>
//           <Button backgorundColor="black" color="inherit" style={{ width: 200 , backgroundColor: "gray"}} href="/about">
//             <Typography variant="h6" noWrap>工大祭とは
//           </Typography></Button><Divider />
//           <Button color="inherit" style={{ width: 200, backgroundColor:"gray"}}><Typography variant="h6" noWrap>ご協賛
//           </Typography></Button><Divider />
//           <Button color="inherit" style={{ width: 200, backgroundColor: "gray" }} href="/offer" ><Typography variant="h6" noWrap>企画募集
//           </Typography></Button><Divider />
//           <Button color="inherit" style={{ width: 200, backgroundColor: "gray" }} href="/access"><Typography variant="h6" noWrap>アクセス
//           </Typography></Button><Divider />
//         </List>
//         <Divider />
//       </Drawer>
//     </div>
//     )
//     }

import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const drawerWidth = 200;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)} style={{backgroundColor:'black'}}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            第６０回工大祭
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      </div>
    );
    }