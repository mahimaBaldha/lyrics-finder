import React from 'react';
import {Link} from 'react-router-dom';

function Track(props) {
    const {track} = props;

    return (
        <div className="column11">
            <div className="row11">
                <p>{track.artist_name}</p>
                <p>
                    <strong><i className="fas fa-play"> Track</i></strong> : {track.track_name}
                    <br/>
                    <strong><i className="fas fa-compact-disc"> Album</i></strong> : {track.album_name}
                </p>
                <Link to={`lyrics/track/${track.track_id}`} className="btn">
                <i className="fas fa-chevron-right" /> View Lyrics
                </Link>
            </div>
        </div>
    );
}

export default Track;
