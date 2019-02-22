import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class TopDressesItem extends Component {
    onDelete = (id)=>{
        console.log(id);
    }
    render() {
        var { dress } = this.props;
        return (
            <div className="col-md-4 col-sm-6">
                <Link to={dress.slug} className="gla_news_block" onClick ={() => this.onDelete(dress.id)} >
                    <span className="gla_news_img">
                        <span className="gla_over" data-image={dress.image} />
                    </span>
                    <span className="gla_news_title aoCuoi-title">{dress.name}  </span>
                </Link>
            </div>
        );
    }
}
export default TopDressesItem;