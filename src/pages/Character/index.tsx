import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Hero from '../../components/Hero';
import Loading from '../../components/Loading';
import api from '../../services/api';
import { CharacterData } from '../../types/CharacterTypes';
import { PageCharacter } from './style';
import { useHistory } from "react-router-dom";

type ParamsType = {
    id? : string | undefined
}
const Character: React.FC = () => {

    const { id } : ParamsType = useParams();
    const [character, setCharacter] = useState<CharacterData>();
    const [loading, setLoading] = useState<boolean>(true)
    const [episodes , setEpsiode] = useState([])

    const history = useHistory()


    const back = () => {
        history.goBack();
    }

    useEffect(() => {
        api.get(`character/${id}`).then(success => {
            const {data} = success
            const episode = data.episode
            setEpsiode(episode)
            setCharacter(data)
            setLoading(false)
        })
    }, [id])
  return (
      <main>
          <PageCharacter>
          {loading ? <Loading /> : (
              <>   
            <Hero text={`${character?.name}`} bgUrl={`${character?.image}`}/>
            <div className="container">
                <button className="button" onClick={back}/>
                <div className="details">
                        <img src={`${character?.image}`} alt="" />
                    </div> 
                <div className="content">
                  <p> Appear in {episodes.length}  episodes </p>
                   <p>Status: {character?.status}</p>
                   <p>Gender : {character?.gender}</p>
                   <p>Location: {character?.location.name}</p>
              </div>    
            </div>
            </>
          )}
          </PageCharacter>
      </main>
  );
}

export default Character;