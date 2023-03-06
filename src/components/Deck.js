import styled from "styled-components";
import React from "react";
import Seta from "../assets/img/seta_play.png"
import Seta2 from "../assets/img/seta_virar.png"
import Result1 from "../assets/img/icone_erro.png"
import Result2 from "../assets/img/icone_quase.png"
import Result3 from "../assets/img/icone_certo.png"

export default function Deck({conc, setConc}) {

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
         {cards.map((f) => <Cards data={f} conc = {conc} setConc = {setConc}/>)}
         <Spacer/>
        </>
    )

}   

let contador = 0

function Cards(props) {



    const [card, setCard] = React.useState(<Card data-test="flashcard">
        <p data-test="flashcard-text">pergunta {props.data.number}</p>
        <img src={Seta} onClick={() => carta2(props.data)} data-test="play-btn"></img>
        </Card>);

      

        const carta2 = () => {

            const resposta = 
            <Card2 data-test="flashcard">
                <p data-test="flashcard-text">{props.data.question}</p>
                <Imagem src={Seta2} onClick={() => carta3(props.data)} data-test="turn-btn"></Imagem>
            </Card2>;

            setCard(resposta);

        }

        const carta3 = () => {

            const resposta = 
            <Card3 data-test="flashcard">
                <p data-test="flashcard-text">{props.data.answer}</p>
                <Botoes>
                    <Botao1 onClick={() => carta4(1)} data-test="no-btn">Não lembrei</Botao1>
                    <Botao2 onClick={() => carta4(2)} data-test="partial-btn">Quase não lembrei</Botao2>
                    <Botao3 onClick={() => carta4(3)} data-test="zap-btn">Zap!</Botao3>
                </Botoes>
            </Card3>;

            setCard(resposta);

        }

        const carta4 = (number) => {

            let resposta = ""

           

            if (number == 1){
            
                resposta =
                <Card41>
                    <p>pergunta {props.data.number}</p>
                    <img src={Result1} data-test="no-icon"></img>
                </Card41>;
                props.setConc(contador+1)
                numeroDeCards()

            }else if(number == 2){
            
                resposta =
                <Card42>
                    <p>pergunta {props.data.number}</p>
                    <img src={Result2} data-test="partial-icon"></img>
                </Card42>;
                props.setConc(contador+1)
                numeroDeCards()

            }else{
            
                resposta =
                <Card43>
                    <p>pergunta {props.data.number}</p>
                    <img src={Result3} data-test="zap-icon"></img>
                </Card43>;
                props.setConc(contador+1)
                numeroDeCards()
            }

            setCard(resposta);
        

        }
    
        

    return(
        <>
            {card}
        </>
    )

}

function numeroDeCards() {
    
    contador++;

    return(contador);
}

const Card = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    background-color: #ffffff;
    width: 300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 16px;
    font-family: 'Recursive';
    img {
        &:hover{
        cursor: pointer;
    }
}

`
const Card2 = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    background-color: #ffffff;
    width: 299px;
    height: 131px;
    font-size: 18px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    box-sizing: border-box;
    padding: 17px 10px;
    font-family: 'Recursive';
    position: relative;
    img {
        &:hover{
        cursor: pointer;
    }
    }

`

const Spacer = styled.div`

    margin-top: 153px;

`

const Imagem = styled.img`

   position: absolute;
   bottom: 5px;
   right: 6px;

`

const Card3 = styled.div`

    height: 131px;
    width: 300px;
    font-size: 18px;
    background-color: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    box-sizing: border-box;
    padding: 17px 10px;
    font-family: 'Recursive';
    position: relative;

    buttom {
        height: 37px;
        width: 85px;
        color: #ffffff;
        font-size: 12px;
    }

`

const Botoes = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    font-family: 'Recursive';
    width: 270px;
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    position: absolute;
    left: 17px;
    bottom: 10px;
    gap: 7px;

`

const Botao1 = styled.button`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    font-family: 'Recursive';
    height: 37px;
    width: 85px;
    color: #ffffff;
    font-size: 12px;
    border-radius: 5px;
    border: 0px;
    background-color: #ff3030;
    &:hover{
        cursor: pointer;
    }

`
const Botao2 = styled.button`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    font-family: 'Recursive';
    height: 37px;
    width: 85px;
    color: #ffffff;
    font-size: 12px;
    border-radius: 5px;
    border: 0px;
    background-color: #FF922E;
    &:hover{
        cursor: pointer;
    }

`
const Botao3 = styled.button`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    font-family: 'Recursive';
    height: 37px;
    width: 85px;
    color: #ffffff;
    font-size: 12px;
    border-radius: 5px;
    border: 0px;
    background-color: #2FBE34;
    &:hover{
        cursor: pointer;
    }

`

const Card41 = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    background-color: #ffffff;
    width: 300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 16px;
    font-family: 'Recursive';

    p {
        color: #ff3030;
        text-decoration-line: line-through;
    }

`

const Card42 = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    background-color: #ffffff;
    width: 300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 16px;
    font-family: 'Recursive';
    
    p {
        color: #FF922E;
        text-decoration-line: line-through;
    }

`

const Card43 = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    background-color: #ffffff;
    width: 300px;
    height: 65px;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 16px;
    font-family: 'Recursive';
    
    p {
        color: #2FBE34;
        text-decoration-line: line-through;
    }

`