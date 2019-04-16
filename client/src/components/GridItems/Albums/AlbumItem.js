import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Constant from '../constants';


class AlbumItem extends Component {
    render() {
        var { album } = this.props;
        return (
            <div className="col-md-3 col-xs-3 gla_anim_box">
                <div className="gla_shop_item album-item">
                    <span className="gla_shop_item_slider">
                        <img src={album.mainImage} alt={album.name} />
                    </span>
                    <Link to={Constant.SLUG_ALBUM + album.id + "/" + album.slug} className="gla_shop_item_title" >
                        {album.name}
                    </Link>
                </div>
            </div>
        );
    }
}
export default AlbumItem;