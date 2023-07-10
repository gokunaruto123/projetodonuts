import filtro from "../../assets/filtro.png"
import Botao from "../../botao/Botao"
import { ContNav } from "./styled"
function Nav(){
    return(
    <ContNav>

        <Botao titulo={"Donuts"}/>
        <Botao titulo={"Ice Cream"}/>
        <Botao titulo={"Bomboloni"}/>
        <img src={filtro} alt=""/>

    </ContNav>
    )
}
export default Nav