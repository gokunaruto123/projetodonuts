import Header from "../../header/header"
import { Botadd, Botaomore, ContDet, Contdiv, ImgBig, Maispro, TitDon, TxtDon, TxtMore, Txtnum } from "./styled"
import seta from "../../assets/seta.png"
import group from "../../assets/group.png"
import donutGrande from "../../assets/Frame 9.png"
import ponto from "../../assets/Frame 10.png"
function Deta(props){
    return(
    <>
    <Header
    pagina={props.pagina}
    imgPrimeira={seta}/>
    imgSegunda={ponto}
    <ContDet>
    <ImgBig src={donutGrande}/>
        <Contdiv>
            <TitDon>
            Unicorn Sprinkles
            </TitDon>
            <TxtDon>
                A fluffy fresh cooked donut covered by a creamy strawberry flavour with rainbow sprinkles.
            </TxtDon>
                <Maispro>
                    <img src={group}/>
                    <Txtnum> 7800</Txtnum>
                </Maispro>
                <Maispro>
                    <TxtMore>Need more?</TxtMore>
                    <Botaomore>Add more</Botaomore>
                </Maispro>
                <Botadd>Add to cart</Botadd>
        </Contdiv>
    </ContDet>
    </>
    )
}
export default Deta