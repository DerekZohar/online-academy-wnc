import React, { useState } from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import EditIcon from '@material-ui/icons/Create';
import './styles.css'

export default function Profile() {
	const [ nameOpen, setNameOpen ] = useState(false);
	const [ emailOpen, setEmailOpen] = useState(false);
	const [passOpen, setPassOpen] = useState(false);

	const handleNameOpen = () => {
		setNameOpen(true);
	};

	const handleNameClose = () => {
		setNameOpen(false);
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
		<div>
			<div className='flex'>
			<TextField label="Name" />
			<button className='iconButton' onClick={handleNameOpen}><EditIcon></EditIcon></button>
			<Dialog open={nameOpen} onClose={handleNameClose} aria-labelledby="form-dialog-title">
				<DialogTitle>Edit Name</DialogTitle>
				<DialogContent>
					<TextField autoFocus margin="dense" label="New name" fullWidth />
				</DialogContent>
				<DialogActions>
					<Button onClick={handleNameClose} color="primary">
						Cancel
					</Button>
					<Button onClick={handleNameClose} color="primary">
						OK
					</Button>
				</DialogActions>
			</Dialog>
			</div>
			<div className='flex'>
			<TextField label="Email" />
			<button className='iconButton' onClick={handleEmailOpen}><EditIcon></EditIcon></button>
            <Dialog open={emailOpen} onClose={handleEmailClose} aria-labelledby="form-dialog-title">
				<DialogTitle>Edit Email</DialogTitle>
				<DialogContent>
					<TextField autoFocus margin="dense"label="New Email" fullWidth />
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
			<Button variant="contained" color="primary" onClick={handlePassOpen}>
				Change Password
			</Button>
			<Dialog open={passOpen} onClose={handlePassClose} aria-labelledby="form-dialog-title">
				<DialogTitle>Change Password</DialogTitle>
				<DialogContent>
					<TextField autoFocus margin="dense"  label="Old Password" fullWidth />
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
