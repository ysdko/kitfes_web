import React, { Component } from 'react'
import Grid from '@material-ui/core/Grid';
import Menu from './Menu.js'
import MyComponent from './Swipe'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Footer from './Footer'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

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

export default function Project() {
	const classes = useStyles();

	return (
		<React.Fragment>
			<div className={classes.root}>
				<Menu />
				<main className={classes.content} style={{ paddingLeft: "50" }}>
					<div className={classes.appBarSpacer} />
					<Container maxWidth="lg" className={classes.container}>
						<Paper>
							<div style={{
								borderBottom: '2px solid red'
							}}>
								<h1 style={{
									marginLeft: 30
								}}>企画一覧</h1>
							</div>
							<Grid container direction="row" spacing={1} alignItems="center">

								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>ただいま準備中です</h2></Grid>
							</Grid>
							<div></div>
						
						</Paper>
						<Box pt={4}>
							<Footer />
						</Box>
					</Container>
				</main>
			</div>
		</React.Fragment >
	)
}