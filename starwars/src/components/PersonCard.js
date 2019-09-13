import React from 'react';
import './StarWars.css';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button, Col
} from 'reactstrap';


const PersonCard = (props) => {
  return (
    <div>
      <Card key={props.id}>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <Col>
          <CardSubtitle>Height: {props.height}</CardSubtitle>
          <CardSubtitle>Weight: {props.mass}</CardSubtitle>
          <CardSubtitle>Hair color: {props.hair_color}</CardSubtitle>
          <CardSubtitle>Skin color: {props.skin_color}</CardSubtitle>
          <CardSubtitle>Eye color: {props.eye_color}</CardSubtitle>
          <CardSubtitle>Birth year: {props.birth_year}</CardSubtitle>
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
          </Col>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard;