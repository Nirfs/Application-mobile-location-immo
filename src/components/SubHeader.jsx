/**
 * 
 * @param {string} srcImage La source de l'image
 * @param {string} alt texte alternatif de l'image
 * @param {string} text texte a afficher sur l'image
 */
import '../styles/subHeader.scss'

export function SubHeader({srcImage, alt, text}){
    return(
        <div className="sub-header-container">
            <img src ={srcImage} alt={alt}/>
            <figcaption>{text}</figcaption>
        </div>
    )
}