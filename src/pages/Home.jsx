import { SubHeader } from "../components/SubHeader";
import cliff from '../assets/sub_header_cliff.webp'
export function Home() {
  return (
    <div>
      <SubHeader srcImage={cliff} alt="image d'une falaise"  text="Chez vous, partout et ailleurs"/>
    </div>
  )
}
