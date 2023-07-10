import Card from "../../card/Card"
import Header from "../../header/header"
import Titheader from "../../titheader/titheader"
import Nav from "../Nav/Nav"
import { SecCard } from "./styled"
import menu from "../../assets/menu.png"
import lupa from "../../assets/lupa.png"
function Home(props){
    return(
    <>
        <Header
        pagina={props.pagina}
        imgPrimeira={menu}
        imgSegunda={lupa}
        />
        <Titheader/>
        <Nav/>
        <SecCard>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </SecCard>
        <Card/>
    </>
    )
}
export default Home