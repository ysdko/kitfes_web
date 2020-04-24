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
import ScrollToTop from './scrollToTop';


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
			<ScrollToTop/>
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
							<div style={{ marginLeft: "45" }}>
							<p1>E-mail&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:iizuka&#64;kit-festival.jp">iizuka@kit-festival.jp</a></p1><br/><br/>
							<p1>住所&nbsp;&nbsp;&nbsp;&nbsp;820-8502</p1><br></br>
							<p1>福岡県飯塚市川津680-4製作作業室7</p1>
							</div>
							<Grid container direction="row" spacing={1} alignItems="center">
								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>ご協賛・広告費について</h2></Grid>
							</Grid>
							<div style={{ marginLeft: "45" }}>
							<p1><a href="/sponsor">こちら</a>のページよりお問い合わせをお願いします。</p1>
							</div>

							<Grid container direction="row" spacing={1} alignItems="center">
								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>外部企画について</h2></Grid>
							</Grid>
							<div style={{ marginLeft: "45" }}>
							<p1><a href="/outside">こちら</a>のページよりお問い合わせをお願いします。</p1>
							</div>

							<Grid container direction="row" spacing={1} alignItems="center">
								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>模擬店について</h2></Grid>
							</Grid>
							<div style={{ marginLeft: "45" }}>
							<p1>以下のメールアドレスよりお問い合わせをお願いします。</p1><br/>
							<p1>E-mail&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:mogi&#64;kit-festival.jp">mogi@kit-festival.jp</a></p1>
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