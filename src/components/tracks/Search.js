import React, { Component } from 'react';
// import axios from 'axios';
import { Consumer } from '../../context'

class Search extends Component {
    state = {
        trackTitle: ''
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    }

    render() {
        return (
            <Consumer>
                {value => {
                    return (
                        <div style={{border: "1px solid rgb(210, 206, 206)"}}>
                            <div className="search-box">
                                <h2><i className="fas fa-music"> Search For A Song</i></h2>
                                <p>Get the lyrics for any song</p>
                            </div>
                            <form>
                                <div className="box">
                                    <input type="text" 
                                    placeholder="Song title..."
                                    name="trackTitle" 
                                    value={this.state.trackTitle}
                                    className="search-form"
                                    onChange={this.onChange}/>

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