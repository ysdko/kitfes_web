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

export default function Sponsor() {
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
									marginLeft: 30,
								}}>ご協賛・広告</h1>
							</div>
							<Grid container direction="row" spacing={1} alignItems="center">
								
								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>ご協力いただける皆様へ</h2></Grid>
							</Grid>
							<div style={{marginRight:"50"}}>
							<p style={{fontSize: "18", marginLeft:"40"}}>毎年、工大祭を支えてくださっている企業や地域、卒業生の皆様ありがとうございます。
							皆様のお力により毎年工大祭を運営することができており、昨年度は4000人以上という本当に多くの来場者にお越しいただくことができました。
							工大祭は学生が主体となって運営している学園祭になっております。実行委員一同、少しでも多くの来場者様の笑顔を見たいという思いから日々活動に励んでおります。
							しかしながら、私たち学生は皆様の経済的な支えなくしては工大祭を運営することができません。
							つきましては、今年度も工大祭を運営するためにも皆様のお力をどうかお貸しいただけないでしょうか？
							皆様からいただいた広告費や協賛品はすべて工大祭の運営に使用させていただきます。
							実りある学祭のためのお力添えにご理解とご協力を賜りますようお願い申し上げます。
							</p>
							<Grid container direction="row" spacing={1} alignItems="center">
							<Grid item>
								<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
							</Grid>
								<Grid item><h2>ご協賛について</h2></Grid>
								</Grid>
								<div style={{marginLeft: "40" }}>
									<p style={{ fontSize: "18"}}>工大祭では毎年多くの企業・団体様からご協賛物品をいただいております.
							いただいたご協賛品につきましては紹介などもさせていただいております。ご検討いただける企業様につきましては以下のメールアドレスよりお気軽にお問い合わせください。</p>
							<p1>E-mail&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:sponsor&#64;kitfestival.jp">sponsor@kit-festival.jp</a></p1>
								</div>

							<Grid container direction="row" spacing={1} alignItems="center">
								<Grid item>
									<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
								</Grid>
								<Grid item><h2>広告費について</h2></Grid>
								</Grid>
								<div style={{marginLeft: "40" }}>
									<p style={{ fontSize: "18" }}>工大祭では毎年多くの企業・団体より広告費をいただいております。ご協力いただけた企業・団体・個人様につきましては実行委員会が発行する工大祭のパンフレットへの掲載をいたします。<br>
							</br>ご検討いただける企業様につきましては以下のメールアドレスよりお気軽にお問い合わせください。</p>
							
								<p1>E-mail&nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:contact&#64;kitfestival.jp">contact@kit-festival.jp</a></p1>
								</div>
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