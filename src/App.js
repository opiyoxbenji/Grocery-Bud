import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

function App() {
	const [name, setName] = useState(''); // for the form
	const [list, setList] = useState([]); // for the list
	const [isEditing, setIsEditing] = useState(false); // for is editing
	const [editID, setEditID] = useState(null); // for item being edited
	const [alert, setAlert] = useState({ show: false, msg: '', type: '' }); // alert

	const handleSubmit = e => {
		e.preventDefault();
		console.log('xoxo');
	};
	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert />}
				<h3>grocery bud</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g. bread'
						value={name}
						onChange={e => setName(e.target.value)}
					/>
					<button type='submit' className='submit-btn'>
						{isEditing ? 'edit' : 'submit'}
					</button>
				</div>
			</form>
			<div className='grocery-container'>
				<List />
				<button className='clear-btn'>clear items</button>
			</div>
		</section>
	);
}

export default App;
