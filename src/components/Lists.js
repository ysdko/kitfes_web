import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

export default function Lists(props) {
	const { list } = props;
	// if (props.file) {
	// 	var element = document.getElementById('test');
	// 	element.innerHTML = "<a href='/kit1.jpg' >sdlhdlskjf</a>"
	// }
	return (
		<div style={{marginBottom: "25"}}>
			 <Grid container direction="row" spacing={1} alignItems="center">

				<Grid item>
					<ArrowRightIcon fontSize="large" style={{ color: "gray" }} />
				</Grid>
				<Grid item><div><h2>{list.title}</h2></div></Grid>
			</Grid>
			<div style={{ marginLeft: 42, fontSize: 18 }}>
				{list.content}<br/><br/>
				{list.url}
			</div>

		</div>
	);

}