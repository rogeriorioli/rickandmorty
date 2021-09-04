import React from 'react';
import { Link } from 'react-router-dom';
import { CardContainer } from './style';
import {CharacterData} from '../../types/CharacterTypes'
// import { Container } from './styles';


const Card = (data : CharacterData) => {
  return (
      <CardContainer>
          <div className="card">
            <div className="card-body">
                <div className="card-image">
                    <figure>
                            <img src={data.image} alt={data.name} srcSet={data.image} loading="lazy" />
                    </figure>  
                </div>
                <div className="card-description">
                    <h2>{data.name}</h2>
                    <div className="card-descrption-infos">
                        <ul>
                            <li>
                                Species : {data.species}
                            </li>
                            <li>
                                Gender : {data.gender}
                            </li> <li>
                                location : {data.location}
                            </li>
                            {data.type && (
                            <li>
                                Type: {data.type}
                            </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="card-footer">
                    <Link to={`/character/${data.id}`}>
                        see details
                    </Link>
                </div>
            </div>
          </div>
      </CardContainer>
  );
}

export default Card;