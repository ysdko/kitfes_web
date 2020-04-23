import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import InfoIcon from '@material-ui/icons/Info';
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import SportsKabaddiIcon from '@material-ui/icons/SportsKabaddi';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import { Link } from 'react-router-dom';

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export const mainListItems = (
	<div>
		<Link to="/about">
		<ListItem button>
			<ListItemIcon>
				<InfoIcon />
				
			</ListItemIcon>
				
				<ListItemText primary="工大祭とは" />
			
		</ListItem>
			</Link>
		<ListItemLink href="/project">
			<ListItemIcon>
				<MenuBookIcon />
			</ListItemIcon>
			<ListItemText primary="企画一覧" />
		</ListItemLink>
		<ListItemLink href="/offer">
			<ListItemIcon>
				<InsertDriveFileIcon />
			</ListItemIcon>
			<ListItemText primary="企画募集" />
		</ListItemLink>
		<ListItemLink href="/sponsor"> 
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="ご協賛・広告" />
		</ListItemLink>
		<ListItemLink href="access">
			<ListItemIcon>
				<RoomIcon />
			</ListItemIcon>
			<ListItemText primary="アクセス" />
		</ListItemLink>
		<ListItemLink href="/contact">
			<ListItemIcon>
				<EmailIcon />
			</ListItemIcon>
			<ListItemText primary="お問い合わせ" />
		</ListItemLink>		
	</div>
);

export const secondaryListItems = (
	<div>
		<ListSubheader inset>公式SNS</ListSubheader>
		<ListItemLink href="https://twitter.com/kit_festival">
			<ListItemIcon>
				<TwitterIcon />
			</ListItemIcon>
			<ListItemText primary="公式Twitter" />
		</ListItemLink>
		<ListItemLink href="https://www.Instagram.com/kit_festival/">
			<ListItemIcon>
				<InstagramIcon />
			</ListItemIcon>
			<ListItemText primary="公式Instagram" />
		</ListItemLink>
		<ListItemLink href="https://www.facebook.com/kyutechfes/">
			<ListItemIcon>
				<FacebookIcon />
			</ListItemIcon>
			<ListItemText primary="公式Facebook" />
		</ListItemLink>
	</div>
);