import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAnnonces } from '../api/ApiAnnonce';
import "../styles/card.scss"

export function Card(){
    const [annonces, setAnnonces] = useState([])

    useEffect(() => {
    getAnnonces()
      .then(setAnnonces)
      .catch(err => console.error(err));
  }, []);

  return(
    <Link className='annonce-container'>
        {annonces.map(annonce => 
        <div key={annonce.id} className='card'>
            <img src={annonce.cover} alt={annonce.title}/>
            <figcaption>{annonce.title}</figcaption>

        </div>
        )}
    </Link>
  )
}