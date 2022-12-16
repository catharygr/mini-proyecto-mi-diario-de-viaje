import React from 'react'

export default function Card(props) {
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

// {
//   title: "Mount Fuji",
//   location: "Japan",
//   googleMapsUrl: "https://duckduckgo.com/?q=mount+fuji&va=b&t=hc&ia=web&iax=about&iaxm=maps&strict_bbox=0&bbox=35.37794632426973%2C138.70331388320457%2C35.353911297345476%2C138.7487744745163",
//   startDate: "12 Jan, 2021",
//   endDate: "24 Jan, 2021",
//   description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
//   imageUrl: "https://source.unsplash.com/WLxQvbMyfas/w=600"
// },