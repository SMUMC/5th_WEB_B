import React from 'react';
import { useState } from 'react';
import { MovieItem, MovieImage, MovieFooter, Overview, PStyling,PStylingOverview } from './movie.style';

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500";

function Movie(props) {
    const [ishover,setHover] = useState(false);
    return (
        <MovieItem>
            <MovieImage image_URL = {BASE_IMG_URL + props.imageSrc} />
            <MovieFooter>
                <PStyling>{props.title}</PStyling>
                <PStyling>{props.avg}</PStyling>
            </MovieFooter>
            <Overview className='overview'>
                <PStylingOverview>{props.detail}</PStylingOverview>
            </Overview>
        </MovieItem>
    );
}

export default Movie;