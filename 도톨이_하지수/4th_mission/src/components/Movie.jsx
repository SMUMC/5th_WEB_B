import React, { useState } from "react";
import { Hoverbox, MovieContainer, MovieInfo } from "./Movies.style";

const IMG_BASE_URL = "https://image.tmdb.org/t/p/w500/";

export default function Movie({ title, poster_path, vote_average, overview }) {
const [isHovered, setIsHovered] = useState(false); 

const handleMouseEnter = () => {
    setIsHovered(true);
};

const handleMouseLeave = () => {
    setIsHovered(false);
};

return (
    <div>
    <MovieContainer
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}>

    <img src={IMG_BASE_URL + poster_path} alt="영화포스터" />
    
    <Hoverbox>
        {isHovered && (
        <div>
            <h3>{title}</h3> 
            <p>{overview}</p>
        </div>
        )}
    </Hoverbox>

    <MovieInfo>
        <h4>{title}</h4>
        <span>{vote_average}</span>
        
    </MovieInfo>
    </MovieContainer>
    </div>
);
}
