import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Link, BrowserRouter} from 'react-router-dom'
import ScrollToTop from './scrollToTop';

const useStyles = makeStyles({
	card: {
		display: 'flex',
	},
	cardDetails: {
		flex: 1,
	},
	cardMedia: {
		width: 160,
	},
	
});

export default function FeaturedPost(props) {
	const classes = useStyles();
	const { post } = props;

	return (

		<CardActionArea>
					<Link to={post.url} style={{ textDecoration: "none" }}>
			<Card className={classes.card}>
					<div className={classes.cardDetails}>
						<CardContent>
							<Typography component="h2" variant="h5">
								{post.title}
							</Typography>
							{/* <Typography variant="subtitle1" color="textSecondary">
								{post.date}
							</Typography> */}
							<Typography variant="subtitle1" paragraph>
								{post.description}
							</Typography>
							<Typography variant="subtitle1" color="primary">
								Continue reading...
              </Typography>
						</CardContent>
					</div>
					<Hidden >
						<CardMedia className={classes.cardMedia} image={post.image} title={post.imageTitle} />
					</Hidden>
				</Card>
			</Link>
				</CardActionArea>

	);
}

FeaturedPost.propTypes = {
	post: PropTypes.object,
};