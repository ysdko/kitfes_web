// import React, { Component } from 'react'
// import List from './List.js'
import { render } from '@testing-library/react'
import FeaturedPost from './FeaturedPost'
import Menu from './Menu'
import Footer from './Footer'
import Lists from './Lists'
// import Drawer from '@material-ui/core/Drawer';
// import CssBaseline from '@material-ui/core/CssBaseline';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// // import List from '@material-ui/core/List';
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
// import clsx from 'clsx';
// import { makeStyles } from '@material-ui/core/styles';
// import Box from '@material-ui/core/Box';
// import Badge from '@material-ui/core/Badge';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Link from '@material-ui/core/Link';
// import NotificationsIcon from '@material-ui/icons/Notifications';
// import { mainListItems, secondaryListItems } from './listItems';
// // import Chart from './Chart';
// // import Deposits from './Deposits';
// // import Orders from './Orders';




// export default class Offer extends Component{
// 	render() {
		
// 		return (
// 			<React.Fragment>
// 				<Menu />
// 				<main style={{ appBarSpacer:'theme.mixins.toolbar'}}>
// 					<div style={{
// 						flexGrow: 1,
// 						height: '100vh',
// 						overflow: 'auto'}} />
				
// 				<Grid container spacing={3}>
// 					{/* Chart */}
// 					<Grid item xs={12} md={8} lg={9}>
// 							<Paper tyle={{ height: 240 }}>
// 								lkgjahgklae;kgawej
// 						</Paper>
// 					</Grid>
// 					{/* Recent Deposits */}
// 					<Grid item xs={12} md={4} lg={3}>
// 						<Paper tyle = {{ height: 240 }}>
// 						</Paper>
// 				</Grid>
// 					</Grid>
// 				</main>
// 				{/* <div style={{
// 					borderBottom: '2px solid red'
// 				}}>
// 					<h1 style={{
// 						marginLeft: 30
// 					}}>企画募集</h1>
// 				</div>
// 				{lists.map((post) => (
// 					<List key={post.key} list={post} />
// 				))}
// 				<Footer /> */}
// 					{/* </div> */}
// 			     </React.Fragment> 
					
// 		)
// 	}
// }

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

const drawerWidth = 240;

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
		height: 500,
	},
}));

export default function Dashboard() {
	const lists = [
		{
			title: '外部企画募集',
			content: "外部団体のみなさまからの企画を募集しております",
		},
		{
			title: '内部企画募集',
			content: '実行委員による企画の参加者を募集しております'
		},
	];
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);
	const handleDrawerOpen = () => {
		setOpen(true);
	};
	const handleDrawerClose = () => {
		setOpen(false);
	};
	const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

	return (
		<div className={classes.root}>
			<header>
				<Menu />
			</header>
			<main className={classes.content}>
				<div className={classes.appBarSpacer} />
				<Container maxWidth="lg" className={classes.container}>
					<Grid container spacing={3}>
						{/* Chart */}
						<Grid item xs={12} >
							<Paper>
								{/* <Chart /> */}
								<div style={{
									borderBottom: '2px solid red'
								}}>
									<h1 style={{
										marginLeft: 30
									}}>企画募集</h1>
								</div>
								{lists.map((post) => (
									<Lists key={post.key} list={post} />
								))}
								<Footer /> 
							</Paper>
						</Grid>
						{/* Recent Orders */}
						
					</Grid>
					<Box pt={4}>
						<Footer />
					</Box>
				</Container>
			</main>
		</div>
	);
}