import React from 'react'
import './AllReservation.css'
import Reservation from '../Reservation/Reservation'

export default function AllReservation({ reservations }) {
	console.log(reservations)
	const allReservation = reservations.map(reservation => {
		return (
			<Reservation
				key={reservation.id}
				id={reservation.id}
				name={reservation.name}
				date={reservation.date}
				time={reservation.time}
				number={reservation.number} />
		)
	})
	return (
		<section className='reservations-container'>
			{allReservation}
		</section>
	)
}