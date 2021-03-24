import "bootstrap/dist/js/bootstrap.min.js";
import React, { Component } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Marketing } from "./components/marketing";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import "./assets/scss/styles.scss";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <main>
          <Hero />
          <Marketing />
          <Features />
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
