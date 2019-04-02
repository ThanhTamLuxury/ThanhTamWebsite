import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TopAlbumItem extends Component {
    render() {
        var { album } = this.props;
        return (
            <div className="col-md-4 col-sm-6 ">
                <Link to={album.slug} className="gla_news_block" >
                    <span className="gla_news_img " >
                        <span className="gla_over" style={{ backgroundImage: "url(" + album.mainImage + ")" }} alt />
                    </span>
                    <span className="gla_news_title">{album.name}</span>
                    <p><strong>{album.location}</strong></p>
                </Link>
            </div>
        );
    }
}
export default TopAlbumItem;