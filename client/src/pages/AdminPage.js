import React, { Component } from 'react';
import { AdminPageContainer } from './../containers/index';
class AdminPage extends Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div className="gla_page" id="gla_page">
                <section className="gla_content admin_content">
                    <AdminPageContainer />
                </section>
            </div>

        );
    }

}
export default AdminPage;
