import { useParams, } from "react-router-dom"
import { useState, useEffect } from "react";
import { getAnnonces } from '../api/ApiAnnonce';
import { NotFound } from "./NotFound";

export function Accomodation(){
    const {id} = useParams()
    const [logement, setLogement] = useState(null)
    
  useEffect(() => {
    getAnnonces().then((data) => {
      const found = data.find((item) => item.id === id);
      setLogement(found);
    });
  }, [id]);

  if (!logement) return <NotFound/>;
    return (
    <div>
        <h1>{logement.title}</h1>
        <p>{logement.description}</p>
    </div>
    )
}