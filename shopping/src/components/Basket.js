import React from "react";
import {Button} from "reactstrap";

function Basket({basket, books, setBasket}) {
  const remove = (id) => {
    basket = basket.filter((obj) => id != obj.id);
    setBasket(basket);
  };
  // const removeFind = basket.find((item) => item.id === id);
  // removeFind.amount -= 1;
  // if (removeFind.amount === 0) {
  //   setBasket([...basket.filter((item) => item.id !== book.id)]);
  // } else {
  //   setBasket([
  //     ...basket.filter((item) => item.id !== book.id),
  //     {
  //       id: book.id,
  //       name: book.name,
  //       author: book.author,
  //       price: book.price,
  //       img: book.img,
  //       amount: removeFind.amount,
  //     },
  //   ]);
  // }

  return (
    // table
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Kitap Adı</th>
            <th>Yazar Adı</th>
            <th>Fiyatı</th>
            <th>Adet</th>
            <th>Toplam</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {basket.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.author}</td>
                <td>
                  {item.price}
                  <span>₺</span>
                </td>
                <td> {item.amount}</td>
                <td>
                  {item.price * item.amount}
                  <span>₺</span>
                </td>
                <td>
                  <Button
                    type="button"
                    color="danger"
                    onClick={() => remove(item.id)}
                  >
                    SİL
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Basket;
