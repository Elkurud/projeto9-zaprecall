import React from "react";
import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/header";
import Deck from "./components/Deck";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <GlobalStyle />

    <Header />

    <Deck/>
    <Footer/>
    </>
  );
}

export default App;
