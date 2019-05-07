import React, { Component } from 'react';


const quote = {
    quote_line_1 : ' Yêu, là cùng nhau chung tay đi dưới con đường,',
    quote_line_2 : 'Là cùng trao cho nhau ngọt môi hôn.',
    quote_details : 'Y.Ê.U - MIN',
    image : 'images/headers/10094956883_a882196f8c_k.jpg'
}

class  QuoteContainer extends Component {

    render() {
        return (
            <section className="gla_section gla_image_bck gla_fixed gla_wht_txt" style={{ backgroundImage: "url(" + quote.image + ")" }}>
                <div className="gla_over" style={{backgroundColor: 'rgb(40, 40, 40)', opacity : "0.4"}}  />
                <div className="container text-center">
                    <p><img src="images/animations/just_wh.gif"  height={150} alt="This is quote" /></p>
                    <h3 style={{ marginBottom: '-10px' }}>" {quote.quote_line_1} </h3>
                    <h3> {quote.quote_line_2} "</h3>
                    <p className="gla_subtitle">— {quote.quote_details}</p>
                </div>
            </section>
        );
    }
}

export default QuoteContainer;
