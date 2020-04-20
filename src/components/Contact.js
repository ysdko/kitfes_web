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

export default function Contact() {
	const classes = useStyles();
	// var data = new Date();
	//   var Hour = now.getHours();
	// var Min = now.getMinutes();
	// var Sec = now.getSeconds();
	// var now = new Date()

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
								}}>お問い合わせ</h1>
							</div>
							<Grid container direction="row" spacing={1} alignItems="center">
								
								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>工大祭実行委員会</h2></Grid>
							</Grid>
							<p1 style={{ marginLeft: "45" }}>E-mail&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:iizuka&#64;kit-festival.jp">iizuka@kit-festival.jp</a></p1><br/><br/>
							<p1 style={{ marginLeft: "45" }}>住所&nbsp;&nbsp;&nbsp;&nbsp;820-8502</p1><br></br>
							<p1 style={{ marginLeft: "87" }}>福岡県飯塚市川津680-4製作作業室7</p1>

							<Grid container direction="row" spacing={1} alignItems="center">
								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>ご協賛向けメールアドレス</h2></Grid>
							</Grid>
							<p1 style={{ marginLeft: "45" }}>E-mail&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:sponsor&#64;kitfestival.jp">sponsor@kit-festival.jp</a></p1>

							<Grid container direction="row" spacing={1} alignItems="center">
								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>外部企画向けメールアドレス</h2></Grid>
							</Grid>
							<p1 style={{ marginLeft: "45" }}>E-mail&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:outside&#64;kit-festival.jp">outside@kit-festival.jp</a></p1>

							<Grid container direction="row" spacing={1} alignItems="center">
								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>外部企画向けメールアドレス</h2></Grid>
							</Grid>
							<p1 style={{ marginLeft: "45" }}>E-mail&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:mogi&#64;kit-festival.jp">@kit-festival.jp</a></p1>
							
						
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