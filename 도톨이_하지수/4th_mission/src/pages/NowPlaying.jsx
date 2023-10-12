import React from "react";
import Movie from '../components/Movie';
import { AppContainer} from '../components/Movies.style';
import { useState, useEffect } from 'react';

export default function NowPlaying(){

    const min_date = '2022-01-01';
    const max_date = '2023-01-01';

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const result = await fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=ko-US&page=1&sort_by=popularity.desc&with_release_type=2|3&release_date.gte=${min_date}&release_date.lte=${max_date}`, {
            headers: {
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxOWQwOGI0YzIzZWQ1NWQ0NWM5OTQzZTg1MmQ5OWE4ZSIsInN1YiI6IjY1MjM5OWI0ZWE4NGM3MDEwYzE4MWM4NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JOt6xCNHgNuBw2gnBkSgkMuER30G8kKGzjZmABeG-Aw',
            },
            });

            if (!result.ok) {
                throw new Error('Network response was not ok');
            }
            
            const data = await result.json();

            setMovies(data.results); 

            console.log(data);
            } catch (error) {
            console.error('Error fetching data:', error);
            }
        };

            fetchData(); 
            }, []); 

    return(
    <div>
    <AppContainer>
    {
        movies.map((item) => {
            return (
                <Movie
                    title={item.title}
                    poster_path={item.poster_path}
                    vote_average={item.vote_average}
                    overview={item.overview} 
        />
        );
    })
    }
    </AppContainer>
    </div>
    );
}