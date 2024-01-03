import React from 'react';
import styled from 'styled-components';
import { FaGithub } from 'react-icons/fa';

const Footer = ({ location }) => {
  return (
    <Container>
      <Copyright location={location}>
        <p>© 2024 faishaltsq</p>
      </Copyright>
      <Social location={location}>
        <a
          className="social"
          href="https://github.com/faishaltsq"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size="1.5rem" />
        </a>
      </Social>
    </Container>
  );
};

const Container = styled.footer`
  box-sizing: border-box;
  height: 3.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //padding: 0.5rem;
  padding: 0 3rem;
  @media (max-width: 40rem) {
    padding: 0 1rem;
  }
`;

const Copyright = styled.div`
  opacity: 0.5;
  color: ${(props) =>
    props.location ? props.theme.footer : props.theme.footerStart};
`;

const Social = styled.div`
  a {
    opacity: 0.5;
    color: ${(props) =>
      props.location ? props.theme.footer : props.theme.footerStart};
    &:hover {
      opacity: 1;
    }
    &:active {
      opacity: 1;
    }
  }
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  text-align: center;
`;

export default Footer;