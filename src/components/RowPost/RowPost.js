import React, { useState, useEffect } from 'react'
import axios from '../../URLS/axios';
import { imageUrl, apiKey } from '../../URLS/url'
import './RowPost.css'
import Youtube from 'react-youtube'
function RowPost(props) {
    const [rowPost, setRowPost] = useState([]);
    const [youtubeID, setYoutubeID] = useState()
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        }
    }
    useEffect(() => {
        axios.get(props.url).then(
            res => {
                console.log(res);
                setRowPost(res['data'].results)
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }, [])

    const playVideo = (id) => {
        console.log(id)
        // setYoutubeID(id)
        axios.get(`movie/${id}/videos?api_key=${apiKey}&language=en-US`).then(
            res => {
                console.log(res['data'].results[0]['key']);
                if (res['data'].results.length > 0) {
                    setYoutubeID(res['data'].results[0]['key']);
                } else {
                    setYoutubeID(399566);
                }
            }
        ).catch(
            err => {
                console.log(err)
            }
        )
    }
    return (
        <div className='row'>
            <h2>{props.title}</h2>
            <div className='posters'>
                {
                    rowPost.map(
                        obj => {
                            return <img onClick={() => playVideo(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'} alt='poster' src={`${imageUrl + obj.backdrop_path}`} />
                        }
                    )
                }
                {/* <img className='poster' alt='poster' src='https://images.squarespace-cdn.com/content/v1/59232e19579fb3fa44a693c2/1589212826160-UM9PEPGOS3OJPR0FJ81X/ke17ZwdGBToddI8pDm48kHZUaJeKzodyg_sXWBMxNTdZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxCBUU7B-_SAG1kGvCwYgmUjQXvn8_OJjtz3K1llMQBa1MPsuSXPSY3X-tgg78M7lI/SKOyqL1qFLIhbK6ho2lB-696x975.jpg?format=1500w' /> */}
            </div>
         { youtubeID &&  <Youtube videoId={youtubeID} opts={opts} />} 
        </div>
    )
}

export default RowPost
