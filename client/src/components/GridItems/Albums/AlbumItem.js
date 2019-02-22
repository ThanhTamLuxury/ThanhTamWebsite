import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class AlbumItem extends Component {
    render() {
        var { album } = this.props;
        return (
            <div className="col-md-3 gla_anim_box">
                <div className="gla_shop_item album-item">
                    <span className="gla_shop_item_slider">
                        <img src={album.image} alt />
                    </span>
                    <Link to={album.slug} className="gla_shop_item_title" >
                        {album.name}
                    </Link>
                </div>
            </div>
        );
    }
}
export default AlbumItem;