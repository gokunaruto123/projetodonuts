import menu from "../assets/menu.png"
import { Primenu } from "./styles"
import { Botnav } from "./styles"
function Header(props){

    const handlePgchange = () => (
        props.pagina()
    )

    return(
        <Primenu>
         <Botnav onClick={handlePgchange}>
            <img src={props.imgPrimeira}/>
        </Botnav>

         <Botnav onClick={handlePgchange}>
            <img src={props.imgSegunda}/>
         </Botnav>
        </Primenu>  
    )
}
export default Header