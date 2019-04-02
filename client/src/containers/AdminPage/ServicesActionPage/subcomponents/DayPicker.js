import React, { Component } from 'react';


class DayPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            
        };
    }


    onChange = (e) => {
        var target = e.target;
        var name = target.name;

        console.log(target.value);
        this.setState({
            [name]: target.value
        });
        if (name === 'txtName') {
            let slug = generate_slug(target.value);
            this.setState({
                txtSlug: slug
            })
        }
    }
    componentDidMount() {
        this.setState({
            imageData: [
                {
                    id: '1',
                    img: 'https://genknews.genkcdn.vn/2017/photo-0-1504160949054.jpg',
                    title: 'Image',
                }, {
                    id: '2',
                    img: 'https://upload.wikimedia.org/wikipedia/tr/e/e2/SK_Telecom_T1.jpg',
                    title: 'Image',
                },
                {
                    id: '3',
                    img: 'https://botw-pd.s3.amazonaws.com/styles/logo-thumbnail/s3/062017/untitled-1_57.png?itok=tEAhECSi',
                    title: 'Image',
                }
            ]
        })
        switch (this.props.serviceItem.key) {
            case Constant.SERVICE_EDIT_DRESS:
                this.setState({
                    isEditing: true
                });
                break;
            default:
                this.setState({
                    isEditing: false
                });
        }

        // fetch API get Item
    }
   
    render() {
            <div>
                
            </div>
        );
    }
}

export default DayPicker;
