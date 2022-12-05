import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import Deck from "./components/Deck";
import Footer from "./components/Footer";
import styled from "styled-components";

function App() {

  const [conc, setConc] = React.useState(0);

  return (
    <Container>
    <GlobalStyle />

    <Header />

    <Deck  conc = {conc} setConc = {setConc}/>
    <Footer conc = {conc}/>
    </Container>
  );
}

export default App;

const Container = styled.div`

  background-color: #fb6b6b;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

`
