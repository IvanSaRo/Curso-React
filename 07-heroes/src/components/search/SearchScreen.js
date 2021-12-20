import queryString from 'query-string';
import React, { useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroesByName } from '../../selectors/getHeroesByName';
import { HeroCard } from '../heroes/HeroCard';


export const SearchScreen = ({history}) => {

    const location = useLocation();
    const {q = ''} = queryString.parse(location.search);

    const [formValues, handleInputChange] = useForm({
        searchText: q,
    })

    const { searchText } = formValues;

    const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
    //ver vídeo 182 para ver explicación, provoca que no se dispare la búsqueda hasta que cambia la query en url

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
        
    }

    
    return (
        <div>
            <h1>Search Screen</h1>
            <hr/>

            <div className="row">
                <div className="col-5">
                    <h4>Search form</h4>
                    <form onSubmit={handleSearch}>
                        <input 
                            type="text"
                            placeholder="Find your hero"
                            className="form-control mt-3" 
                            name="searchText"
                            onChange={ handleInputChange }
                            autoComplete="off"
                        />
                        <button
                            type="submit"
                            className="btn m-1 btn-block btn-outline-primary mt-3 w-100"
                        >
                            Search...
                        </button>
                    </form>
                </div>
                <div className="col-7">
                    <h4> Results </h4>
                    <hr/>

                    { 
                        (q === '') 
                            && 
                            <div className="alert alert-info">
                                Search a hero
                            </div>
                    }

                    { 
                        (q !== '' && heroesFiltered.length === 0) 
                            && 
                            <div className="alert alert-danger">
                                No hero matches your request
                            </div>
                    }

                    {

                        heroesFiltered.map(hero => {
                            return <HeroCard
                                key={hero.id}
                                {...hero}
                            />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
