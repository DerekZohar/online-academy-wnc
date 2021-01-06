import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Create';
import './styles.css';
import { Avatar } from '@material-ui/core';
import { useSelector } from 'react-redux';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& > *': {
				margin: theme.spacing(1)
			}
		},
		large: {
			width: theme.spacing(10),
			height: theme.spacing(10)
		}
	})
);

export default function Profile() {
	const classes = useStyles();
	const user = useSelector((state: any) => state.user.value);
	console.log(user);

	const [ firstNameOpen, setFirstNameOpen ] = useState(false);
	const [ lastNameOpen, setLastNameOpen ] = useState(false);
	const [ emailOpen, setEmailOpen ] = useState(false);
	const [ passOpen, setPassOpen ] = useState(false);

	const handleFirstNameOpen = () => {
		setFirstNameOpen(true);
	};

	const handleFirstNameClose = () => {
		setFirstNameOpen(false);
    };
    
    const handleFirstNameOk = () => {
        
    };

	const handleLastNameOpen = () => {
		setLastNameOpen(true);
	};

	const handleLastNameClose = () => {
		setLastNameOpen(false);
	};

	const handleEmailOpen = () => {
		setEmailOpen(true);
	};

	const handleEmailClose = () => {
		setEmailOpen(false);
	};

	const handlePassOpen = () => {
		setPassOpen(true);
	};

	const handlePassClose = () => {
		setPassOpen(false);
	};

	return (
		<div className="Container">
			<Avatar className={classes.large} />
			<div className="flex">
				<TextField
					label="First Name"
					InputProps={{
						readOnly: true
					}}
					value={user.firstName}
				/>
				<button className="iconButton" onClick={handleFirstNameOpen}>
					<EditIcon />
				</button>
				<Dialog open={firstNameOpen} onClose={handleFirstNameClose} aria-labelledby="form-dialog-title">
					<DialogTitle>Edit First Name</DialogTitle>
					<DialogContent>
						<TextField autoFocus margin="dense" label="New first name" fullWidth />
					</DialogContent>
					<DialogActions>
						<Button onClick={handleFirstNameClose} color="primary">
							Cancel
						</Button>
						<Button onClick={handleFirstNameOk} color="primary">
							OK
						</Button>
					</DialogActions>
				</Dialog>
			</div>
			<div className="flex">
				<TextField
					label="User Name"
					InputProps={{
						readOnly: true
					}}
					value={user.lastName}
				/>
				<button className="iconButton" onClick={handleLastNameOpen}>
					<EditIcon />
				</button>
				<Dialog open={lastNameOpen} onClose={handleLastNameClose} aria-labelledby="form-dialog-title">
					<DialogTitle>Edit Last Name</DialogTitle>
					<DialogContent>
						<TextField autoFocus margin="dense" label="New last name" fullWidth />
					</DialogContent>
					<DialogActions>
						<Button onClick={handleLastNameClose} color="primary">
							Cancel
						</Button>
						<Button onClick={handleLastNameClose} color="primary">
							OK
						</Button>
					</DialogActions>
				</Dialog>
			</div>
			<div className="flex">
				<TextField
					label="Date Of Birth"
					InputProps={{
						readOnly: true
					}}
					value={user.birthDate}
				/>
				<button className="iconButton" onClick={handleEmailOpen}>
					<EditIcon />
				</button>
				<Dialog open={emailOpen} onClose={handleEmailClose} aria-labelledby="form-dialog-title">
					<DialogTitle>Edit Day of birth</DialogTitle>
					<DialogContent>
						<TextField autoFocus margin="dense" label="New Day of birth" fullWidth />
					</DialogContent>
					<DialogActions>
						<Button onClick={handleEmailClose} color="primary">
							Cancel
						</Button>
						<Button onClick={handleEmailClose} color="primary">
							OK
						</Button>
					</DialogActions>
				</Dialog>
			</div>
			<Button
				variant="contained"
				color="primary"
				style={{
					fontSize: '16px',
					padding: '8px 24px 8px 24px',
					marginTop: 10
				}}
				onClick={handlePassOpen}
			>
				Change Password
			</Button>
			<Dialog open={passOpen} onClose={handlePassClose} aria-labelledby="form-dialog-title">
				<DialogTitle>Change Password</DialogTitle>
				<DialogContent>
					<TextField autoFocus margin="dense" label="Old Password" fullWidth />
					<TextField margin="dense" label="New Password" fullWidth />
				</DialogContent>
				<DialogActions>
					<Button onClick={handlePassClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handlePassClose} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
