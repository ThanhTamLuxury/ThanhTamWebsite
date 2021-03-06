import React, { Component } from 'react';
import { MenuContainer } from '../../containers/index';
import { withStyles } from '@material-ui/core/styles';
import { loggedIn } from '../../utils/authenService';

const styles = theme => ({
    redirectAdmin: {
        width: "100%",
        color: "White",
        backgroundColor: 'Black',
        fontWeight: 'bold',
        textAlign: 'center',
        cursor: 'pointer'
    },

    linkToAdmin: {
        color: 'White',
        '&:hover': {
            color: 'White'
        }
    }
    
})
class Header extends Component {
    renderBackToAdmin = () => {
        const { classes } = this.props;
        if (loggedIn()) {
            return (<div className={classes.redirectAdmin} onClick={this.handleBackToAdmin}>
                        <a href="/admin" className={classes.linkToAdmin}>Quay lại trang quản lý</a>
                    </div>)
        }
    }
    render() {
        return (
            <header>
                {this.renderBackToAdmin()}
                <nav className="gla_light_nav gla_transp_nav">
                    <div className="container">
                        <div className="gla_logo_container clearfix">
                            <img src="/images/glanz_logo.png" alt = "Logo" className="gla_logo_rev" />
                            <div className="gla_logo_txt">
                                <a href="/" className="gla_logo">Thanh tâm luxury</a>
                            </div>
                        </div>
                        <MenuContainer />
                    </div>
                </nav>
            </header>
        );
    }
}



export default withStyles(styles)(Header);