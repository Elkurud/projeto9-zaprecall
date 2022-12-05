import styled from "styled-components";
import logo from "../assets/img/logo.png"

export default function Header() {

    return(
        <Head>
        <img src={logo} />
        <p>ZapRecall</p>
        </Head>
    )
}


const Head = styled.div`

    @import url('https://fonts.googleapis.com/css2?family=Recursive:wght@300;400;500;600;700;800;900&family=Righteous&display=swap');

    height: 60px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    
    & p {
        font-family: 'Righteous', cursive;
        color: #ffffff;
        font-size: 36px;
        margin-left: 16px;
    }
    
    img {
        height: 60px;
    }
    
    
`;