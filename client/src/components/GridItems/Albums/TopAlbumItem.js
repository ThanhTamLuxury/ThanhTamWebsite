import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Constant from '../constants';
class TopAlbumItem extends Component {
    render() {
        var { album } = this.props;
        return (
            <div className="col-md-4 col-sm-6 ">
                <Link to={Constant.SLUG_ALBUM + album.id + "/" + album.slug} className="gla_news_block" >
                    <span className="gla_news_img " >
                        <span className="gla_over" style={{ backgroundImage: "url(" + album.mainImage + ")" }} alt={album.slug} />
                    </span>
                    <span className="gla_news_title">{album.name}</span>
                    <p><strong>{album.location}</strong></p>
                </Link>
            </div>
        );
    }
}
export default TopAlbumItem;