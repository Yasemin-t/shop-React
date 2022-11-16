import React from "react";
import {
  Card,
  CardText,
  CardBody,
  CardTitle,
  Button,
  Row,
  Col,
} from "reactstrap";

function Product({books, basket, setBasket, search}) {
  function addBasket(book) {
    const addFind = basket.find((item) => item.id === book.id);

    // eğer ürünüm varsa
    if (addFind) {
      // sayısını 1 arttır
      addFind.amount += 1;
      // miktarı artacak ürünü çıkartıp yeni halini eklendi(miktarını arttırdı)
      setBasket([
        ...basket.filter((item) => item.id !== book.id),
        {
          id: book.id,
          name: book.name,
          author: book.author,
          price: book.price,
          img: book.img,
          amount: addFind.amount,
        },
      ]);
    }
    //  yoksa yeni ürünü ekle ve miktarını 1 den başlat
    else {
      setBasket([
        ...basket,
        {
          id: book.id,
          name: book.name,
          author: book.author,
          price: book.price,
          img: book.img,
          amount: 1,
        },
      ]);
    }
  }

  return (
    <div className="card">
      <Row>
        {books
          ?.filter((item) => {
            if (search == "") {
              return item;
            } else item.name.includes(search);
            {
              return item;
            }
          })
          .map((item, ind) => {
            return (
              <Col xs={6} key={ind}>
                <Card
                  style={{
                    width: "13rem",
                  }}
                >
                  <img alt="Sample" src={item.img} />
                  <CardBody>
                    <CardTitle tag="h5">{item.name} </CardTitle>
                    <CardTitle tag="h5">
                      {item.price}
                      <span>₺</span>
                    </CardTitle>

                    <CardText>{item.author}</CardText>
                    <Button color="danger" onClick={() => addBasket(item)}>
                      Ekle
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            );
          })}
      </Row>
    </div>
  );
}

export default Product;
