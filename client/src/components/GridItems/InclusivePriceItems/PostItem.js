import React, { Component } from 'react';

class PostItem extends Component {
    constructor(props){
        super(props)
        this.myDiv = React.createRef()
      }

      componentDidMount () {
        console.log(this.myDiv.current.offsetHeight)
      }
    render() {
        var { post } = this.props
        return (
            <div className="col-md-9 col-xs-12 goiDichVu">
                <div className="gla_post_item">
                    <div className="gla_post_title">
                        <h3>{post.name}</h3>
                    </div>
                    <div className="gla_post_info">
                    <strong>Địa điểm: </strong>{post.location}
                  </div>
                    <p>
                        <strong>Ekip: </strong> {post.ekip}<br />
                    </p>
                    {/* Content */}
                    <div ref={this.myDiv} dangerouslySetInnerHTML={{ __html: post.content }} />
                    {/*End Content */}
                    <p />
                    <div className="pull-left">
                        <a className="price"><span>{post.price}</span>VNĐ</a>
                    </div>
                    <div className="gla_post_more clearfix">
                        <div className="pull-right">
                            <a href="Album.html" className="btn">Albums tham khảo</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostItem;
