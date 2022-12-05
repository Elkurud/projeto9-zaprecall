import styled from "styled-components";
import React from "react";
import Seta from "../assets/img/seta_play.png"
import Seta2 from "../assets/img/seta_virar.png"

export default function Corpo() {

    const cards = [
        { number: "1" ,question: "O que é JSX?", answer: "Uma extensão da linguagem JavaScript" },
        { number: "2" ,question: "O React é __", answer: "Uma biblioteca JavaScript para construção de interfaces" },
        { number: "3" ,question: "Componentes devem iniciar com __", answer: "Letra maiúscula" },
        { number: "4" ,question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
        { number: "5" ,question: "O ReactDOM nos ajuda __", answer: "Interagindo com a DOM para colocar componentes React na mesma" },
        { number: "6" ,question: "Usamos o npm para __", answer: "Gerenciar os pacotes necessários e suas dependências" },
        { number: "7" ,question: "Usamos props para __", answer: "Passar diferentes informações para componentes" },
        { number: "8" ,question: "Usamos estado (state) para __", answer: "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente" }
    ]

    return(
        <>
        <Spacer/>
         {cards.map((f) => <Cards data={f}/>)}
        </>
    )

}

function Cards(props) {

    const [card, setCard] = React.useState(<Card>
        <p>pergunta {props.data.number}</p>
        <img src={Seta} onClick={() => carta2(props.data)}></img>
        </Card>);

        const carta2 = () => {

            const resposta = 
            <Card2>
                <p>pergunta {props.data.question}</p>
                <Imagem src={Seta2} onClick={() => carta2(props.data)}></Imagem>
            </Card2>;

            setCard(resposta);
            return(resposta);

        }

    return(
        <>
            {card}
        </>
    )

}

const Card = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    background-color: #ffffff;
    width: 300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 16px;
    font-family: 'Recursive';
    &:hover{
        cursor: pointer;
    }

`
const Card2 = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    background-color: #ffffff;
    width: 299px;
    height: 131px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    box-sizing: border-box;
    padding: 17px 10px;
    font-family: 'Recursive';
    position: relative;

`

const Spacer = styled.div`

    margin-top: 153px;

`

const Imagem = styled.img`

   position: absolute;
   bottom: 5px;
   right: 6px;

`