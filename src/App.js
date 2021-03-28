import "bootstrap/dist/js/bootstrap.min.js";
import JsonData from "./data/data.json";
import React, { Component } from "react";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Marketing } from "./components/marketing";
import { Features } from "./components/features";
import { Footer } from "./components/footer";
import "./assets/scss/styles.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = JsonData;
  }
  render() {
    const app = this.state;

    return (
      <>
        <Header data={app} />
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
