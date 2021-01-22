
    // <nav>
    //   <ul className="flex items-center justify-between p-8">
    //     <li>
    //       <Link href="/">
    //         <a className="text-blue-500 no-underline text-accent-1 dark:text-blue-300">
    //           Home
    //         </a>
    //       </Link>
    //     </li>
    //     <ul className="flex items-center justify-between space-x-4">
    //       {links.map(({ href, label }) => (
    //         <li key={`${href}${label}`}>
    //           <a href={href} className="no-underline btn-blue">
    //             {label}
    //           </a>
    //         </li>
    //       ))}
    //     </ul>
    //   </ul>
    // </nav>
    import React, { useState } from 'react';
    import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
    
    const Layout = (props) => {
      const [collapsed, setCollapsed] = useState(true);
    
      const toggleNavbar = () => setCollapsed(!collapsed);
    
      return (
        <div>
          <Navbar color="faded" light>
            <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink href="/components/">Components</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      );
    }
    
    export default Layout;