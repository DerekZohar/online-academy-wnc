import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Avatar from '@material-ui/core/Avatar';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import './styles.css';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import { Checkbox, FormControlLabel, Grid, TextField } from '@material-ui/core';
import { DatePicker, KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { useFormik } from 'formik';
import DateFnsUtils from '@date-io/date-fns';

const useStyles = makeStyles((theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			'& > *': {
				margin: theme.spacing(1)
			}
		},
		large: {
			width: theme.spacing(8),
			height: theme.spacing(8)
		},

		fab: {
			marginLeft: '20px'
		}
	})
);
export default function AdminUser() {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			roleId: false,
			birthDate: ''
		},
		onSubmit: async (values) => {
			const userDataToPost = {
				firstName: values.firstName,
				lastName: values.lastName,
				email: values.email,
				roleId: values.roleId ,
				birthDate: selectedDate?.toString,
				password: values.password
			};
			console.log(userDataToPost);
			// await Axios.post(`${process.env.REACT_APP_API_SIGNUP}`, userDataToPost)
			// 	.then((res) => {})
			// 	.catch((error) => console.log(error));
		}
	});
	const classes = useStyles();
	const [ selectedDate, handleDateChange ] = React.useState<Date | null>(new Date());
	const user = useSelector((state: any) => state.user.value);
	const [ thisDialog, setDialog ] = useState(false);
	const [ thisList, setList ] = useState([
		{
			verified: true,
			email: '',
			firstName: '',
			lastName: '',
			birthDate: '',
			roleId: 1,
			createdDate: '',
			id: ''
		}
	]);

	const onAddUser = () => {
		setDialog(true);
	};

	const DialogClose = () => {
		setDialog(false);
	};

	useEffect(() => {
		async function fetchdata() {
			await Axios.get('http://localhost:3000/api/user/all', {
				headers: {
					Authorization: 'Bearer ' + user.token
				}
			})
				.then((res) => {
					setList(res.data);
				})
				.catch((error) => {
					alert(error);
				});
		}
		fetchdata();
	}, []);

	const onDeleteUser = async (value: any) => {
		await Axios.delete('http://localhost:3000/api/user/' + value, {
			headers: {
				Authorization: 'Bearer ' + user.token
			}
		})
			.then((res) => {
				alert('delete success');
			})
			.catch((error) => {
				alert(error);
			});
		
		await Axios.get('http://localhost:3000/api/user/all', {
				headers: {
					Authorization: 'Bearer ' + user.token
				}
			})
				.then((res) => {
					setList(res.data);
				})
				.catch((error) => {
					alert(error);
				});
	};

	if (!user.token) return <div />;

	return (
		<div className="margin">
			<List>
				{thisList.map((value) => (
					<ListItem>
						<ListItemAvatar className="spacing">
							<Avatar className={`${classes.large} ${'avatar'}`} />
						</ListItemAvatar>
						<ListItemText
							primary={value.firstName + ' ' + value.lastName}
							secondary={
								<div>
									<p>{value.email}</p>
									{value.roleId === 1 ? <p>Student</p> : <p>Teacher</p>}
								</div>
							}
						/>
						<ListItemSecondaryAction>
							<IconButton onClick={() => onDeleteUser(value.id)}>
								<DeleteIcon />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))}
			</List>
			<Fab className={classes.fab} size="small" color="primary" aria-label="add" onClick={onAddUser}>
				<AddIcon />
			</Fab>

			<Dialog open={thisDialog} onClose={DialogClose} aria-labelledby="form-dialog-title">
				<DialogTitle>Add User</DialogTitle>
				<DialogContent>
					<form action="" onSubmit={formik.handleSubmit}>
						<Grid container spacing={2} style={{ marginTop: '20px' }}>
							<Grid item xs={12} sm={6}>
								<TextField
									autoComplete="fname"
									name="firstName"
									variant="outlined"
									required
									fullWidth
									id="firstName"
									label="First Name"
									autoFocus
									onChange={formik.handleChange}
									value={formik.values.firstName}
								/>
							</Grid>
							<Grid item xs={12} sm={6}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="lastName"
									label="Last Name"
									name="lastName"
									autoComplete="lname"
									onChange={formik.handleChange}
									value={formik.values.lastName}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									id="email"
									label="Email Address"
									name="email"
									autoComplete="email"
									onChange={formik.handleChange}
									value={formik.values.email}
								/>
							</Grid>
							<Grid item xs={12}>
								<TextField
									variant="outlined"
									required
									fullWidth
									name="password"
									label="Password"
									type="password"
									id="password"
									autoComplete="current-password"
									onChange={formik.handleChange}
									value={formik.values.password}
								/>
							</Grid>
							<Grid item xs={12}>
								<MuiPickersUtilsProvider utils={DateFnsUtils}>
									<DatePicker value={selectedDate} onChange={handleDateChange} />
								</MuiPickersUtilsProvider>
							</Grid>
							<Grid item xs={12}>
								<FormControlLabel
									control={<Checkbox value="allowExtraEmails" color="primary" defaultChecked ={formik.values.roleId}/>}
									label="Teacher?"
									onChange={formik.handleChange}
								/>
							</Grid>
						</Grid>
						<input type="submit" className="btn" defaultValue="Add" />
					</form>
				</DialogContent>
			</Dialog>
		</div>
	);
}
