import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as Constant from '../constants';
class DressItem extends Component {
  render() {
    var { dress } = this.props;
    return (
      <div className="col-md-3 gla_anim_box">
        <div className="gla_shop_item ao-cuoi-item">
          <span className="gla_shop_item_slider">
            <img src={dress.mainImage} alt={dress.name} />
          </span>
          <Link to={Constant.SLUG_WEDDING_DRESS + dress.id + "/" + dress.slug} className="gla_shop_item_title" >{dress.name}</Link>
        </div>
      </div>

    );
  }
}
export default DressItem;