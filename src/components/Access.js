import React, { Component } from 'react';
import Menu from './Menu'
import Footer from './Footer'
import { render } from '@testing-library/react';
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
	fixedHeight: {
		height: 500,
	},
}));

export default function Access(){
		const classes = useStyles();
		let inputhtml = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2348.399957535865!2d130.67103232208675!3d33.653558267277496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35417fd4f7759849%3A0xb3b26a2563cccd95!2z6Kqy5aSW5rS75YuV5pa96KitICjjgrXjg7zjgq_jg6vmo58p!5e0!3m2!1sja!2sjp!4v1584590584348!5m2!1sja!2sjp" width="100%" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0""margin= 0 auto"></iframe>'
		return (
			<React.Fragment>
				<div className={classes.root}>
				<header>
					<Menu/>
				</header>
					<main className={classes.content} style={{ paddingLeft: "50" }}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Grid container spacing={3}>
							{/* Chart */}
							<Grid item xs={12} >
								<Paper>
									<div style={{
										borderBottom: '2px solid red'
									}}>
										<h1 style={{
											marginLeft: 30
										}}>アクセス</h1>
									</div>
									<div style={{ textAlign: 'center' }}>
										<div dangerouslySetInnerHTML={{ __html: inputhtml }} style={{ margin: '0 auto' }} />
										</div> 
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
			</React.Fragment >
		)

}
