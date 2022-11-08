import "./App.css";
import "reactstrap";
import Product from "./components/Product";
import React from "react";
import Newproduct from "./components/Newproduct";
import Navi from "./components/Navi";
import {Col, Container, Row} from "reactstrap";
import Search from "./components/Search";

function App() {
  return (
    <div>
      <Container>
        <Navi />
        <Search></Search>
        <br />
        <Newproduct />
        <Row>
          <Col xs="8">
            <Product />
          </Col>

          <Col xs="4">
            <h1 className="basket">Sepet</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
