import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import Deck from "./components/Deck";
import Footer from "./components/Footer";

function App() {

  const [conc, setConc] = React.useState(0);

  return (
    <>
    <GlobalStyle />

    <Header />

    <Deck  conc = {conc} setConc = {setConc}/>
    <Footer conc = {conc}/>
    </>
  );
}

export default App;
