import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
	const [reservations, setReservations] = useState([])

	useEffect(() => {
		setReservations()
	}, [])
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>

        </div>
        <div className='resy-container'>
          
        </div>
      </div>
    )
}

export default App;
