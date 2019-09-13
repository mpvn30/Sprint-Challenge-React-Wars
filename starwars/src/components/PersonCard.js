import React from 'react';
import {
  Card, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


const PersonCard = (props) => {
  return (
    <div>
      <Card key={props.id}>
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>Height: {props.height}</CardSubtitle>
          <CardSubtitle>Weight: {props.mass}</CardSubtitle>
          <CardSubtitle>Hair color: {props.hair_color}</CardSubtitle>
          <CardSubtitle>Skin color: {props.skin_color}</CardSubtitle>
          <CardSubtitle>Eye color: {props.eye_color}</CardSubtitle>
          <CardSubtitle>Birth year: {props.birth_year}</CardSubtitle>
          <CardSubtitle>Gender: {props.gender}</CardSubtitle>
          <Button>homeworld: {props.homeworld}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default PersonCard;