import React from 'react';
import { MovieItem, MovieImage, MovieFooter, Overview, PStyling,PStylingOverview } from './movie.style';
import {StyledLink } from './movie.style';

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

function Movie(props) {
    return (
        <StyledLink key={props.id} to={`/movie/${props.id}`} >
            <MovieItem>
                <MovieImage image_URL = {BASE_IMG_URL + props.imageSrc}/>
                    <MovieFooter>
                        <PStyling>{props.title}</PStyling>
                        <PStyling>{props.avg}</PStyling>
                    </MovieFooter>
                    <Overview className='overview'>
                        <PStylingOverview>{props.detail}</PStylingOverview>
                    </Overview>
                </MovieItem>
        </StyledLink>
    );
}

export default Movie;