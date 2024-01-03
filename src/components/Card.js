import React from 'react';
import styled from 'styled-components';


const Card = (props) => {
  return (
    <Container>
      <img src={props.img} alt={props.title} />
      <CardBody>
        <CardText>
          <h2 className="card_title">{props.title}</h2>
          <p className="card_description">{props.description}</p>
        </CardText>
        <ButtonArea>
          {props.link_three ? (
            <a className="link3" href={props.link_three}>
              {props.link_three_text}
            </a>
          ) : null}
        </ButtonArea>
      </CardBody>
    </Container>
  );
};




const Container = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  box-shadow: 0 3px 6px -1px rgb(0 0 0 / 10%), 0 5px 10px -2px rgb(0 0 0 / 10%);
  text-align: left;
  border-radius: 0.5rem;
  height: 100%;
  position: relative;
  overflow: hidden;
  background: ${(props) => props.theme.card};
  img {
    width: 100%;
    display: block;
    border-bottom: 1px solid #ccc;
  }

  h2 {
    font-size: 1rem;
  }

  .card_description {
    padding: 0.5rem 0;
    font-size: 0.9rem;
  }

  .technologies {
    font-size: 0.8rem;
  }
  .technologies2 {
    font-size: 0.8rem;
  }

  a:not(.collaborator-link) {
    text-align: center;
    font-size: 0.8rem;
    font-weight: 600;
    padding: 0.4rem;
    text-decoration: none;
    background-color: ${(props) => props.theme.cardButton};
    border: solid 1px ${(props) => props.theme.cardButtonBorder};
    color: ${(props) => props.theme.cardButtonText};
    border-radius: 2rem;

    &:hover {
      background-color: ${(props) => props.theme.cardButtonHover};
      color: ${(props) => props.theme.cardButtonTextHover};
      border: 1px solid ${(props) => props.theme.cardButtonBorderHover};
    }
  }
`;

const CardText = styled.div`
  padding: 0.8rem 1rem 0rem 1rem;
`;

const CardBody = styled.div`
  height: calc(100% - 12rem - 1px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ButtonArea = styled.div`
  display: grid;
  padding: 0.5rem 1rem 1rem 1rem;
  //padding-top: 0.7rem;
  
`;
export default Card;
