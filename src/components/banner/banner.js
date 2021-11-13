import React, { useEffect, usemovie, useState } from 'react'
import './banner.css'
import axios from '../../URLS/axios';
import { apiKey, imageUrl } from '../../URLS/url'


function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        console.log('test')
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${apiKey}&language=en-US`).then(
            res => {
                console.log(res['data'].results[0]);
                let counter = 0;
                setInterval(() => {
                    if (counter < 20) {
                        counter = counter + 1
                    } else {
                        counter = 0;
                    }
                    setMovie(res['data'].results[counter])
                }, 5000)

            }, err => {
                console.log(err)
            }
        )
    }, [])
    return (
        <div style={{ backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ''})` }}
            className='banner'>
            <div className='content' >
                <h1 className='title'>{movie ? movie.title : ''}  </h1>
                <div className='banner_buttons' >
                    <button className='button' >Play</button>
                    <button className='button' >My list</button>
                </div>
                <h1 className='description'>{movie ? movie.overview : ''}</h1>
            </div>
            <div className="fade_bottom"></div>
        </div>
    )
}

export default Banner
