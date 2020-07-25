import React, { Component } from 'react';
import axios from 'axios';
import Spinner from '../layout/Spinner';
import {Link} from 'react-router-dom';

class Lyrics extends Component {
    state= {
        track: {},
        lyrics: {}
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            // console.log(res.data);
            this.setState({lyrics: res.data.message.body.lyrics});
            
            return axios.get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`
              );
        })
        .then(res=>{
            this.setState({track: res.data.message.body.track});
        })
        .catch( error => console.log(error));
    }

  render() {
    const { track, lyrics } = this.state;
    if(track === undefined || lyrics === undefined || Object.keys(track).length === 0 || 
        Object.keys(lyrics).length === 0){
        return <Spinner/>
    }else{
        const {music_genre_list} = track.primary_genres.music_genre_list;
        console.log(music_genre_list);
        return (
        <React.Fragment>
            <Link to="/" className="lyric-link-btn">Go Back</Link>
            <div className="boxx">
                <h5 className="lyric-title-box">
                    {track.track_name} by{" "}
                    <span className="text-secondary">{track.artist_name}</span>
                </h5>
                <div className="lyric-box">
                    <p>{lyrics.lyrics_body}</p>
                </div>
            </div>
            <ul>
                <li className="li_styling"><strong>Album ID</strong>: {track.album_id}</li>
                {music_genre_list !== undefined ? <li className="li_styling"><strong>Song Genre</strong>:{" "}
                    {music_genre_list[0].music_genre.music_genre_name}
                </li> : <li className="li_styling"><strong>Song Genre</strong> : None</li>}
                <li className="li_styling">
                    <strong>Explicit Words</strong>: {track.explicit === 0 ? 'No' : 'Yes'}
                </li>
                <li className="li_styling">
                    <strong>Release Date</strong>: {track.updated_time}
                </li>
            </ul>
        </React.Fragment>
        );
    }
  }
}

export default Lyrics;