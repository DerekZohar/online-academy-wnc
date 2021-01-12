import React, { useState, useEffect } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios';
import { useSelector } from 'react-redux';
import './styles.css';

export default function Admin_Course() {
	const user = useSelector((state: any) => state.user.value);
	const [ thisList, setList ] = useState([
		{
			price: 0,
			rating: 0,
			discount: 0,
			name: '',
			teacherId: '',
			categoryId: '',
			subCategoryId: '',
			samplePictures: [],
			createdDate: '',
			lastEdited: '',
			feedback: [],
			lessons: [],
			description: '',
			overview: '',
			id: ''
		}
	]);

	useEffect(() => {
		async function fetchdata() {
			await Axios.get('http://localhost:3000/api/course', {
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
	const onDeleteCourse = async (value: any) => {
		await Axios.delete('http://localhost:3000/api/course/' + value, {
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
	};

	if (!user.token) return <div />;

	return (
		<div className="margin">
			<List>
				{thisList.map((value) => (
					<ListItem>
						<ListItemAvatar>
							<img
								className="image-course"
								src="https://designshack.net/wp-content/uploads/placeholder-image.png?fbclid=IwAR2ofEWpEemBKyPiNsoXM7eft07vVAdvlniEDeC8Z2CXxmhA-954oUTW2Mc"
							/>
						</ListItemAvatar>
						<ListItemText primary={value.name} secondary={value.description} />
						<ListItemSecondaryAction>
							<IconButton>
								<DeleteIcon onClick={() => onDeleteCourse(value.id)} />
							</IconButton>
						</ListItemSecondaryAction>
					</ListItem>
				))};
			</List>
		</div>
	);
}
