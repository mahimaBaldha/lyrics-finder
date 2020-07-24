import React, { Component } from 'react';
import axios from 'axios';

const Context = React.createContext();

export class Provider extends Component {
    state = {
        track_list: [   
          // {track: {track_id:'t463t4636t4',
          // artist_name:"La La La gaithak",
          // track_name:" ghfhvbrvcsjzdnamvf",
          // album_name:"hjsgchdcbnc"}},
          // {track: {track_id:'t463t4636t4',
          // artist_name:"La La La gaithak",
          // track_name:" ghfhvbrvcsjzdnamvf",
          // album_name:"hjsgchdcbnc"}},
          // {track: {track_id:'t463t4636t4',
          // artist_name:"La La La gaithak",
          // track_name:" ghfhvbrvcsjzdnamvf",
          // album_name:"hjsgchdcbnc"}},
          // {track: {track_id:'t463t4636t4',
          // track_name:" ghfhvbrvcsjzdnamvf",
          // album_name:"hjsgchdcbnc"}},
          // {track: {track_id:'t463t4636t4',
          // artist_name:"La La La gaithak",
          // track_name:" ghfhvbrvcsjzdnamvf",
          // album_name:"hjsgchdcbnc"}},
          // {track: {track_id:'t463t4636t4',
          // track_name:" ghfhvbrvcsjzdghcfhgfhrvbws dcxbvgcebd waesdbchnfbf cvcshdxnamvf",
          // album_name:"hjsgchdcbnc"}},
          // {track: {track_id:'t463t4636t4',
          // track_name:" ghfhvbrvcsjzdnamvf",
          // album_name:"hjsgchdcbnc"}},
          // {track: {track_id:'t463t4636t4',
          // track_name:" ghfnbdhshgbvf2begccdsfhcghe chrgdty    cjhrghfe   hvbrvcsjzdnamvf",
          // album_name:"hjsgchdcbnc"}},
          // {track: {track_id:'t463t4636t4',
          // track_name:" ghfhvbrvcsjzdnamvf",
          // album_name:"hjsgchdcbnc"}},
        ],
        heading: 'Top 10 Tracks'
    }

    componentDidMount() {
        axios.get(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=us&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`)
        .then(res => {
            console.log(res.data);
            this.setState({track_list: res.data.message.body.track_list});
        })
        .catch( error => console.log(error));
    }
  render() {
    return (
      <Context.Provider value={this.state}>
          {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;