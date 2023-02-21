import React, { useEffect, useState } from 'react';
import './App.css';
import Reservation from '../reservations/Reservation';

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
	return (
		<div className="App">
			<h1 className='app-title'>Turing Cafe Reservations</h1>
			<div className='resy-form'>

			</div>
			<div className='resy-container'>
				<Reservation reservation={reservations}/>
			</div>
		</div>
	)
}

export default App;
