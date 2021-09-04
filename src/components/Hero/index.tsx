import React from 'react';

import { HeroContainer } from './styles';


type HeroProps = {
    bgUrl :string
    text : string
}
const Hero  = ({bgUrl , text} : HeroProps) => {
  return (
        <HeroContainer bg={bgUrl}>
            <h2>{text}</h2>
        </HeroContainer>
  );
}

export default Hero;