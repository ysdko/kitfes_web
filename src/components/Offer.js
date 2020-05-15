// import React, { Component } from 'react'
// import List from './List.js'
import { render } from '@testing-library/react'
import FeaturedPost from './FeaturedPost'
import Menu from './Menu'
import Footer from './Footer'
import Lists from './Lists'

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
import ScrollToTop from './scrollToTop';


// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
	},
	appBarSpacer: theme.mixins.toolbar,
	content: {
		flexGrow: 1,
		height: '100vh',
		// overflow: 'auto',
	},
	container: {
		paddingTop: theme.spacing(1),
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
			content: "外部のみなさまからの企画を募集しております。参加を検討されている方は以下の募集要項をご精読の上、QRコードまたはURLより公式LINEへの友達追加をお願いします！",
			youkou: <li><a href="第６０回工大祭外部企画募集要項.pdf">外部企画募集要項</a></li>,
			line: <li><p1>外部企画公式LINEへの友達追加は<a href="https://lin.ee/2Tj4VFckD">こちら</a>から</p1></li>,
			url: <li><p1>E-mail&nbsp;&nbsp;&nbsp;<a href="mailto:outside&#64;kit-festival.jp">outside@kit-festival.jp</a></p1></li>
		},
		{
			title: '委員企画募集',
			content: '実行委員による企画の参加者を募集いたします。募集開始までしばらくお待ちください。'
		},
		{
			title: '模擬店募集',
			content: '模擬店出店団体を募集しております。模擬店の出店を考えている方はチラシ記載のQRコードまたはURLより公式LINEに友達追加をお願いします！',
			youkou: <li><a href="模擬店チラシ.pdf">模擬店企画チラシ</a></li>,
			line: <li><p1>模擬公式LINEへの友達追加は<a href="https://lin.ee/7qM0TyO">こちら</a>から</p1></li>,
			url: <li><p1>E-mail&nbsp;&nbsp;&nbsp;<a href="mailto:mogi&#64;kit-festival.jp">mogi@kit-festival.jp</a></p1></li>
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
		<React.Fragment>
		<ScrollToTop/>
		<div className={classes.root}>
			<header>
				<Menu />
			</header>
			<main className={classes.content} style={{paddingLeft:50,}}>
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
									<img src="/bosyu.jpg" style={{ width: '100%', height: '25vw', objectFit: 'cover' }}></img>
									{lists.map((post) => (
									<div style={{marginRight:'50'}}>
											<Lists key={post.key} list={post} />
									</div>
								))}
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
		</React.Fragment>
	);
}