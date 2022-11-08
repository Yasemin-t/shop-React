import React, {useState} from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

function Newproduct(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button id="modal" color="secondary" onClick={toggle}>
        Yeni Ürün Ekle
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Ürün Ekle</ModalHeader>
        <ModalBody>
          <Form>
            <FormGroup>
              <Label for="productName">Kitap Adı:</Label>
              <Input
                className="form-control "
                id="productName "
                name="name"
                placeholder="Ürün  giriniz"
                type="text"
                autoComplete="off"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="authorName">Yazar Adı:</Label>
              <Input
                className="form-control "
                id="authorName "
                name="author"
                placeholder="Yazar adı giriniz"
                type="text"
                autoComplete="off"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="productPrice">Kitap Fiyatı:</Label>
              <Input
                className="form-control "
                id="productPrice "
                name="price"
                placeholder="Fiyat giriniz"
                type="number"
                autoComplete="off"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleFile">File</Label>
              <Input id="exampleFile" name="file" type="file" />
            </FormGroup>
          </Form>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={toggle}>
            Kaydet
          </Button>
          <Button color="danger" onClick={toggle}>
            Kapat
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default Newproduct;
