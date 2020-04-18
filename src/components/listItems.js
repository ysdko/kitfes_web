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

export const mainListItems = (
	<div>
		<ListItem button>
			<ListItemIcon>
				<InfoIcon />
			</ListItemIcon>
			<ListItemText primary="工大祭とは" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<SportsKabaddiIcon />
			</ListItemIcon>
			<ListItemText primary="企画募集" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<PeopleIcon />
			</ListItemIcon>
			<ListItemText primary="ご協賛" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<RoomIcon />
			</ListItemIcon>
			<ListItemText primary="アクセス" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<EmailIcon />
			</ListItemIcon>
			<ListItemText primary="お問い合わせ" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<LayersIcon />
			</ListItemIcon>
			<ListItemText primary="公式SNS" />
		</ListItem>
		
	</div>
);

export const secondaryListItems = (
	<div>
		<ListSubheader inset>Saved reports</ListSubheader>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Current month" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Last quarter" />
		</ListItem>
		<ListItem button>
			<ListItemIcon>
				<AssignmentIcon />
			</ListItemIcon>
			<ListItemText primary="Year-end sale" />
		</ListItem>
	</div>
);