import React, { Component }from 'react'
import Grid from '@material-ui/core/Grid';
import ButtonAppBar from './Menu.js'
import MyComponent from './Swipe'
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import Footer from './Footer'
export default class About extends Component {
	// var data = new Date();
	//   var Hour = now.getHours();
	// var Min = now.getMinutes();
	// var Sec = now.getSeconds();
	// var now = new Date()
	render() {
		return (
			<React.Fragment>
				<ButtonAppBar />
				<div>
					
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
					<Footer />
				</div>
			</React.Fragment >
		)
	}
}