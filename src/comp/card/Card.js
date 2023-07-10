import { CardContainer, DivCard, ImgCard, TitCard, TxtCard } from "./styled"

function Card(){
    return(
    <CardContainer>
    <ImgCard src=""/>
    <TitCard>
        Unicorn Sprinkles
    </TitCard>
    <TxtCard>Strawberry creamy..</TxtCard>
    <DivCard> <p>7.800</p> <a>Mais</a></DivCard>
    </CardContainer>
    )
}
export default Card