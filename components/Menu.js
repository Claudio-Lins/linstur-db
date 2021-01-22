import React, { useState } from "react";
import Link from "next/link";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Menu = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
          <Container className='flex text-center'>
        <NavbarBrand href="/" className="mr-auto">
          LinsTur
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <Link href="/entradas">
                <a className="no-underline text-accent-1 dark:text-blue-300">
                  Entradas
                </a>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/km">
                <a className="no-underline text-accent-1 dark:text-blue-300">
                  KM
                </a>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/resumo">
                <a className="no-underline text-accent-1 dark:text-blue-300">
                  Resumo
                </a>
              </Link>
            </NavItem>

            <NavItem>
              <Link href="/combustivel">
                <a className="no-underline text-accent-1 dark:text-blue-300">
                Combustivel
                </a>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
