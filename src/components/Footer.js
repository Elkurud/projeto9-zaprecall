import React from "react";
import styled from "styled-components";
import { contador2 } from "./Deck";

export default function Footer() {

function contador () {
    console.log({contador2});
}

return(

    <Foooter>
        <Spacer/>
        asdasdasdasdasdasdasdasdasdasd
        
    </Foooter>

)

}

const Foooter = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 0;
    left: 0;
    background-color: #ffffff;
    font-family: 'Recursive';


`

const Spacer = styled.div`

margin-top: 70px;

`