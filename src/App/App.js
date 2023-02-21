import React, { useEffect, useState } from 'react';
import './App.css';
import AllReservation from '../AllReservations/AllReservations';
import Form from '../Form/Form';

function App() {
	const [reservations, setReservations] = useState([])

	useEffect(() => {
		fetch('http://localhost:3001/api/v1/reservations')
			.then(response => {
				if (response.ok) {
					return response.json()
				}
			})
			.then(response => {
				console.log(response)
				setReservations(response)
			})
	}, [])

	const addReservation = (newReservation) => {
		fetch('http://localhost:3001/api/v1/reservations', {
			method: 'POST',
			body: JSON.stringify(newReservation),
			headers: { 'Content-Type': 'application/json' }
		})
			.then(response => response.json())
			.then(data => console.log(data))
		setReservations([...reservations, newReservation])
	}
	return (
		<div className="App">
			<h1 className='app-title'>Turing Cafe Reservations</h1>
			<div className='resy-form'>
				<Form addReservation={addReservation} />
			</div>
			<div className='resy-container'>
				<AllReservation reservations={reservations} />
			</div>
		</div>
	)
}

export default App;
