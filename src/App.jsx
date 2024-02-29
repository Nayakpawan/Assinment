
// eslint-disable-next-line no-unused-vars
import React from "react"
import './App.scss';
import Header from "./Components/Header";
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import CardContenar from "./Components/CardContenar";
import SignUp from "./Components/SignUp";
function App() {
  return (
    <>
      <Header />
      <div className="body">
        <Home />
        <CardContenar />
        <SignUp />
      </div>
      <Footer />
    </>
  )
}

export default App
