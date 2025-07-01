import logoWhite from "../assets/logo_kasa_white.svg"
import "../styles/footer.scss"

export function Footer(){
    return(
        <div className="footer-container">
            <img src={logoWhite}/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}