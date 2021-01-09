import { Home } from '@material-ui/icons';
import React, { useState } from 'react';
import './styles.css';

export default function Admin() {
    const [state, setstate] = useState('Home');
    const homeClick = () => {
        setstate('Home')
    }
    const newClick = () => {
        setstate('News')
    }
    const contactClick = () => {
        setstate('Contact')
    }
	return (
		<div className="topnav">
            <a className={state ==='Home' ? 'active' : ''} onClick={homeClick} >Home</a>
			<a className={state ==='News' ? 'active' :''} onClick={newClick} >News</a>
			<a className={state ==='Contact' ? 'active' :''} onClick={contactClick} >Contact</a>
		</div>
	);
}
