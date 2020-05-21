import React from "react";
import { Nav } from "react-bootstrap";
export default function Navbar() {
  return (
    <div>
      <Nav className=" bg-info" justify variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/home">Hiba Alaani </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">My Projects</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Contact</Nav.Link>
        </Nav.Item>
      </Nav>
      ;
    </div>
  );
}
