import PropTypes from "prop-types";
import { useState } from 'react'

const BASE_IMG_URL = "https://image.tmdb.org/t/p/w500"
function Movie(props) {

    return (
        <div className="movie-item" >
            <img src={BASE_IMG_URL+props.imageSrc}></img>
            <div className="movie-footer">
                <p>{props.title}</p>
                <p>{props.avg}</p>
            </div>
            <div className="overview">
                <p>{props.detail}</p>
            </div>
        </div>
    );
}
export default Movie;