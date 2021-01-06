import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import ImageUploader from 'react-images-upload';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './styles.css';

export default function UploadCourse() {
	const [ picture, setPicture ] = useState([]);
	// const onDrop = (UploadPicture: any) => {
	// 	console.log(UploadPicture);
	// 	setPicture(picture.concat(UploadPicture));
	// };

	const readURL = (input: any) => {
		if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = (e) => {
                $('#blah').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }
    
    $("#imgInp").change(function(){
        readURL(this);
    });
	}
	return (
		<div>
			<TextField label="Course Name" required />
			{/* <div style={{ marginRight: '15px' }}>
				<ImageUploader
					withPreview={true}
					withIcon={false}
					buttonText="Choose images"
					onChange={onDrop}
					maxFileSize={5242880}
					singleImage={true}
				/>
			</div> */}
			<form id="form1">
				<input type="file" id="imgInp" onClick={readURL} />
				<img id="blah" src="#" alt="your image" />
			</form>
			<ReactQuill />
		</div>
	);
}
