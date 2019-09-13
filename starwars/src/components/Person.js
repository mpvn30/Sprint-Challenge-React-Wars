import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './StarWars.css';
import PersonCard from './PersonCard';
// import { Container } from 'reactstrap';
export default function Person(){
    const [person, setPerson] = useState([]);

useEffect(() =>{
    axios
    .get(`https://swapi.co/api/people/#/`)
    .then(response => {
        const jedi = response.data.results;
        console.log(jedi);
        setPerson(jedi);
    })
    .catch(error => {
        console.log("the data was not returned", error);
    })
}, []);

    return(
        <div className='container'>
            {person.map(e => {
                return(
                    <PersonCard 
                        key={e.id}
                        name={e.name}
                        height={e.height}
                        mass={e.mass}
                        hair_color={e.hair_color}
                        skin_color={e.skin_color}
                        eye_color={e.eye_color}
                        birth_year={e.birth_year}
                        gender={e.gender}
                        homeworld={e.homeworld}
                    />
                )
            })}
        </div>
    );
}