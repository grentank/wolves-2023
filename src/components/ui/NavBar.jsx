import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';

export default function NavBar({ user }) {
  const location = useLocation();
  const navigation = [
    {
      active: location.pathname === '/',
      href: '/',
      text: 'Home',
      hidden: false,
    },
    {
      active: location.pathname === '/chat',
      href: '/chat',
      text: 'Chat',
      hidden: !user,
    },
    {
      active: location.pathname === '/auth',
      href: '/auth',
      text: 'Signin',
      hidden: user,
    },
    {
      active: location.pathname === '/reg',
      href: '/reg',
      text: 'Signup',
      hidden: user,
    },
    {
      active: location.pathname === '/profile',
      href: '/profile',
      text: 'Profile',
      hidden: !user,
    },
    {
      active: false,
      href: '/api/auth/logout',
      text: 'Logout',
      hidden: !user,
    },
  ];
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav className="me-auto" defaultActiveKey="/">
          {navigation.map(({ active, href, text, hidden }) => (
            <Nav.Link hidden={hidden} key={href} active={active} href={href} eventKey={href}>
              {text}
            </Nav.Link>
          ))}
        </Nav>
      </Container>
    </Navbar>
  );
}
