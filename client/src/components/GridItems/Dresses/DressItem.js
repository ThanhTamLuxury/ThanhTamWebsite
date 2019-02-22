import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DressItem extends Component {
  render() {
    var { dress } = this.props;
    return (
      <div className="col-md-3 gla_anim_box">
        <div className="gla_shop_item">
          <span className="gla_shop_item_slider">
            <img src={dress.image} alt />
          </span>
          <Link to={dress.slug} className="gla_shop_item_title" >{dress.name}</Link>
        </div>
      </div>

    );
  }
}
export default DressItem;