import { useState} from "react"
import '../styles/collapse.scss'

export function Collapse({title, text}){
    const [open, setOpen] = useState(false)
    console.log(open)

  return (
    <div className="collapse-container">
      <div className="button-container" onClick={() => setOpen(!open)}>
        <p>{title}</p>
        <i className={`fa-solid fa-chevron-up ${open ? "open" : ""}`}></i>
      </div>
      <p className={`text ${open ? "open" : ""}`}>
        {text}
      </p>
    </div>
  );
}