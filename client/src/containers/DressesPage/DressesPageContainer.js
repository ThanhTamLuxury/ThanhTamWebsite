import React, { Component } from 'react';
import { DressItem } from './../../components/index';
import { connect } from 'react-redux';
import { axios_fetch_dressesList } from './axios_call';



const renderDresses = (dresses) => {
    var result = null;
    if (dresses.length > 0) {
        result = dresses.map((dress, index) => {
            return (
                <DressItem key={index} dress={dress} />
            );
        });
    }
    return result;
}

class DressesPageContainer extends Component {
    componentDidMount() {
        this.props.fetchDressesList();
    }
    render() {
        const {dressesList} = this.props;
        return (
            <div className="container dresses-container">
                <div className="row">
                {dressesList && renderDresses(dressesList.dresses)}
                </div>
                <nav className="gla_blog_pag">
                    <ul className="pagination">
                        <li><a href="#"><i className="ti ti-angle-left" /></a></li>
                        <li className="active"><a href="#">1</a></li>
                        <li><a href="#">2</a></li>
                        <li><a href="#">3</a></li>
                        <li><a href="#">4</a></li>
                        <li><a href="#">5</a></li>
                        <li><a href="#"><i className="ti ti-angle-right" /></a></li>
                    </ul>
                </nav>
            </div>
        );
    }
}
const mapStateToProps = state => {
    return {
        dressesList: state.dressesPage.dressesList
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchDressesList: () => {
            dispatch(axios_fetch_dressesList());
        },
    }
}
export default connect(mapStateToProps, mapDispatchToProps) (DressesPageContainer);
