import './Form.css'
import React, {useState, useEffect}from 'react'

export default function Form(props) {
	const [name, setName] = useState('')
	const [date, setDate] = useState('')
	const [time, setTime] = useState('')
	const [number, setNumber] = useState(Number)

	const submitReservation = event => {
		event.preventDefault()
		const newReservation = {
			id: Date.now(),
			name,
			date,
			time,
			number
		}
		props.addReservation(newReservation)
	}

	return (
		<form>
			<input 
			type=''
			placeholder='name'
			name='name'
			value={name}
			onChange={(event) => setName(event.target.value)}/>

			<input 
			type=''
			placeholder='date (mm/dd)'
			name='date'
			value={date}
			onChange={(event) => setDate(event.target.value)}/>

			<input 
			type=''
			placeholder='time'
			name='time'
			value={time}
			onChange={(event) => setTime(event.target.value)}/>

			<input 
			type= ''
			placeholder='number of guests'
			name='number'
			value={number}
			onChange={(event) => setNumber(Number(event.target.value))}/>

			<button onClick={submitReservation}>Make Reservation</button>
		</form>
	)
}