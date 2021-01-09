import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import DeleteIcon from '@material-ui/icons/Delete';
import './styles.css';

export default function Admin_Course() {

	return (
		<List>
			<ListItem>
				<ListItemAvatar>
					<Avatar>
						<ImageIcon />
					</Avatar>
				</ListItemAvatar>
				<ListItemText primary="Photos" secondary="Jan 9, 2014" />
				<button className="iconButton">
					<DeleteIcon />
				</button>
			</ListItem>
		</List>
	);
}
