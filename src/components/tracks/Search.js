import React, { Component } from 'react';
import axios from 'axios';
import { Consumer } from '../../context'

class Search extends Component {
    state = {
        trackTitle: ''
    }

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    findTrack = (dispatch, e) => {
        e.preventDefault();

        axios
            .get(
                `https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.trackTitle}&page_size=10&page=1&s_track_rating=desc&apikey=${
                process.env.REACT_APP_MM_KEY
                }`
            )
            .then(res => {
                dispatch({
                    type: 'SEARCH_TRACKS',
                    payload: res.data.message.body.track_list
                });
                this.setState({ trackTitle: '' });
            })
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div style={{ border: "1px solid rgb(210, 206, 206)", margin: "30px 20px 0 20px" }}>
                            <div className="search-box">
                                <h2><i className="fas fa-music"> Search For A Song</i></h2>
                                <p>Get the lyrics for any song</p>
                            </div>
                            <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                <div className="search-box">
                                    <input type="text"
                                        placeholder="Song title..."
                                        name="trackTitle"
                                        value={this.state.trackTitle}
                                        className="search-form"
                                        onChange={this.onChange} />

                                    <button type="submit" className="search-btn">Get Track lyrics</button>
                                </div>

                            </form>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default Search;