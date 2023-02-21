import './Reservation.css'
import React from 'react'

export default function Reservation({name,date,time,number}) {
	
	return (
		<section className='reservation-card'>
			<p>{name}</p>
			<p>{date}</p>
			<p>{time} pm</p>
			<p>Number of guests: {number}</p>
		</section>
	)
}

// {
// 	id: 1,
// 	name: "Christie",
// 	date: "12/29",
// 	time: "7:00",
// 	number: 12
// 	},