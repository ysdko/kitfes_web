import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
const Footer = () => {

	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright © '}
			<Link color="inherit" href="https://material-ui.com/">
				第60回九州工業大学情報工学部工大祭実行委員会
      </Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	);
	
}

export default Footer;