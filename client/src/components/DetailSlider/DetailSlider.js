import React, { Component } from 'react';

class DetailSlider extends Component {
    render() {
        var {pageTitle} = this.props;
        return (
            <div className="gla_page_title gla_image_bck gla_wht_txt" data-color="#282828" style={{backgroundImage: "url(/images/wedding/carita_lee/15320532559_ee3e0d021d_k.jpg)", backgroundAttachment: 'fixed', backgroundPosition: '50% 50%' }}>
                <div className="container text-left">
                    <div className="row">
                        <div className="col-md-8">
                            <h1 className="gla_h1_title">{pageTitle}</h1>
                        </div>
                    </div>
                </div>
            </div>
         );
    }
}

export default DetailSlider;