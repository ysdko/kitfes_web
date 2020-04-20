import React, { Component }from 'react'
import Grid from '@material-ui/core/Grid';
import Menu from './Menu.js'
import MyComponent from './Swipe'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Footer from './Footer'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CssBaseline from '@material-ui/core/CssBaseline';

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

export default function About() {
	const classes = useStyles();
	// var data = new Date();
	//   var Hour = now.getHours();
	// var Min = now.getMinutes();
	// var Sec = now.getSeconds();
	// var now = new Date()
	
		return (
			<React.Fragment>
				<div className={classes.root}>
					<CssBaseline />
					<Menu />
					<main className={classes.content} style={{ paddingLeft: "50" }}>
					<div className={classes.appBarSpacer} />
						<Container maxWidth="lg" className={classes.container}>
							<Paper >
					<div style={{
						borderBottom: '2px solid red'
					}}>
						<h1 style={{
							marginLeft: 30
						}}>工大祭とは</h1>
					</div>
					<Grid container direction="row" spacing={1} alignItems="center">

						<Grid item>
							<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
						</Grid>
						<Grid item><div><h2>概要</h2></div></Grid>
					</Grid>
					<div style={{marginLeft: 35, fontSize: 18}}>
						工大祭とは九州工業大学情報工学部 飯塚キャンパスで２日間行われる学園祭のことです。<br />
						私たち情報工学部では毎年地域の方々やご協賛のみなさまのおかげで開催することができております。
					</div>
					<Grid container direction="row" spacing={1} alignItems="center">

						<Grid item>
							<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
						</Grid>
						<Grid item><div><h2>開催日</h2></div></Grid>
					</Grid>
					<div style={{ marginLeft: 35, fontSize: 18 }}>
						2020年11月21日(土) 22日(日)
					</div>

					<Grid container direction="row" spacing={1} alignItems="center">

						<Grid item>
							<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
						</Grid>
						<Grid item><div><h2>場所</h2></div></Grid>
					</Grid>
					<div style={{ marginLeft: 35, fontSize: 18 }}>アクセスは<a href="/access">こちら</a>から</div>

					<Grid container direction="row" spacing={1} alignItems="center">

						<Grid item>
							<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
						</Grid>
						<Grid item><div><h2>委員長から</h2></div></Grid>
					</Grid>
					
					<a href="kit1.jpg" download="kit1.jpg">Download Text</a>
					
				<div>
					<dl>
							<dt>開催日</dt>
							<dd><ArrowRightIcon /></dd>
						<dd>11月21日(土) 22日(日)</dd>
					</dl>
								</div>
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