import React from 'react'

export default function Card(props) {
  console.log(props)
  return (
    <section className='card'>
      <div className='card--img'>
        <img src={props.imageUrl} alt={`Imagen del ${props.title}`} />
      </div>
      <div className="card--contenido">
        <p>📍 <span className='card--ubicacion'>{props.location}</span><a  className='card--mapa' href={props.googleMapsUrl}>Ver en el mapa</a></p>
        <h2>{props.title}</h2>
        <p className='card--fecha'>{props.startDate} - {props.endDate}</p>
        <p className='card-descripcion'>{props.description}</p>
      </div>
      
    </section>
  )
}

