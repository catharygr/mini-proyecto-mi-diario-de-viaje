import React from 'react'
import Card from './Card'
import data from '/src/assets/data'

export default function Diario() {
  const tarjetas = data.map(tarjeta => {
    return <Card 
    {...tarjeta}
    
    // Se puede hacer esto tambien 
      // title={tarjeta.title}
      // location={tarjeta.location}
      // googleMapsUrl={tarjeta.googleMapsUrl}
      // startDate={tarjeta.startDate}
      // endDate={tarjeta.endDate}
      // description={tarjeta.description}
      // imageUrl={tarjeta.imageUrl}

    
    />
  })
  return (
    <div className='container'>
    {tarjetas}


    </div>
  )
}


  //  title: "Mount Fuji",
  //     location: "Japan",
  //     googleMapsUrl: "https://duckduckgo.com/?q=mount+fuji&va=b&t=hc&ia=web&iax=about&iaxm=maps&strict_bbox=0&bbox=35.37794632426973%2C138.70331388320457%2C35.353911297345476%2C138.7487744745163",
  //     startDate: "12 Jan, 2021",
  //     endDate: "24 Jan, 2021",
  //     description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
  //     imageUrl: "https://source.unsplash.com/WLxQvbMyfas/w=600"