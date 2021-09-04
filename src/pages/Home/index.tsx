import React, { useEffect } from 'react';
import { useState } from 'react';
import Card from '../../components/Card';
import Hero from '../../components/Hero';
import Loading from '../../components/Loading';
import api from '../../services/api';
import { CharacterData } from '../../types/CharacterTypes';
// import { Container } from './styles';

const Home = () => {

    const [characters , setCharacters] = useState<CharacterData[]>([]);
    const [paginate, setPaginate] = useState<number>(1)
    const [pages, setPages]  = useState<number>(1)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        api.get(`character?page=${paginate}`).then(success => {
            const {results, info } = success.data
            setPages(info.pages)
            setLoading(false)
            setCharacters(results)
        }).catch(err => console.log(err))
    }, [paginate])

    const nestPage = () => { 
        setLoading(!loading)
       setPaginate(paginate +  1)     
    }
    
    const backPage = () => { 
        setPaginate(paginate - 1)     
     }

  return (
      <main>
          <Hero bgUrl="https://img.elo7.com.br/product/zoom/2C94BAE/painel-1-50x1-rick-e-morty-personalizado.jpg" text="Characters Cards" />
          <div className="container">   
          <div className="paginate">
           {paginate >  1  &&     
          <button onClick={backPage}/> }
              <div className="paginate-count">
              Pages Avaliable: { pages - paginate  }
             </div> 
              {pages === paginate ? '' :
              <button onClick={nestPage} />
}
          </div> 
            {loading ? (
                <Loading/>
            ) :
            characters.map(character => (       
                <Card 
                    key={character.id} 
                    name={character.name}
                    species={character.species}
                    image={character.image}
                    gender={character.gender}
                    status={character.status}
                    id={character.id}
                    type={character.type}
                    location={`${character.location?.name}`}
                />
            ))}  
          </div>
          <div className="paginate">
           {paginate >  1  &&     
          <button onClick={backPage}/> }
              <div className="paginate-count">
              Pages Avaliable: { pages - paginate  }
             </div> 
              {pages === paginate ? '' :
              <button onClick={nestPage} />
}
          </div>
      </main>
  );
}

export default Home;