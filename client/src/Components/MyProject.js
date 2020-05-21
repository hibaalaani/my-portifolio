import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import Candy from "../image/Candy.png";
import TgifM from "../image/TgifM.png";
import Gallery from "../image/Gallery.png";
import BookStore from "../image/BookStore.png";
export default function MyProject() {
  return (
    <div className="container justify-space-between">
      <div className="col-md-5">
        <Card style={{ width: "18rem" }} className=" card-project rounded">
          <Card.Img variant="top" src={Candy} />

          <Card.Body style={{ width: "18rem", height: "10rem" }}>
            <Card.Title>Candy Store</Card.Title>
            <Card.Text>worked with html css bootstap</Card.Text>
            <a href="https://alaani-candy-color.netlify.app/" target="_blank">
              <Button variant="primary">See The Pro</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className=" card-project rounded ">
          <Card.Img variant="top" src={TgifM} />
          <Card.Body style={{ width: "18rem", height: "10rem" }}>
            <Card.Title>TGIF Project</Card.Title>
            <Card.Text>vanilla javascript fetch API Congress.</Card.Text>
            <a
              href="https://alaani-tgif.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">See The Pro</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className=" card-project rounded">
          <Card.Img variant="top" src={Gallery} />
          <Card.Body style={{ width: "18rem", height: "10rem" }}>
            <Card.Title>Gallery</Card.Title>
            <Card.Text>Html and Css based in</Card.Text>
            <a
              href="https://alaani-image-gallery.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">See The Pro</Button>
            </a>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem" }} className=" card-project rounded">
          <Card.Img variant="top" src={BookStore} />
          <Card.Body style={{ width: "18rem", height: "10rem" }}>
            <Card.Title>Book Store</Card.Title>
            <Card.Text>
              The project based in React js and Fetch Books API
            </Card.Text>
            <a
              href="https://alaani-book-store-react.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="primary">See The Pro</Button>
            </a>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
