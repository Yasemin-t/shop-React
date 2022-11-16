import "./App.css";
import "reactstrap";
import Product from "./components/Product";
import React, {useEffect, useState} from "react";
import Newproduct from "./components/Newproduct";
import Navi from "./components/Navi";
import {Col, Container, Row} from "reactstrap";
import Search from "./components/Search";
import Basket from "./components/Basket";
import Data from "./components/Data";

function App() {
  const {books} = Data;
  const [basket, setBasket] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  return (
    <div>
      <Container>
        <Navi />
        <Search search={search} setSearch={setSearch} />
        <br />
        <Newproduct />
        <Row>
          <Col xs="8">
            <Product
              key={books.id}
              basket={basket}
              setBasket={setBasket}
              books={books}
            />
          </Col>

          <Col xs="4">
            <h1 className="basket">Sepet</h1>
            <Basket basket={basket} key={books.id} books={books} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
