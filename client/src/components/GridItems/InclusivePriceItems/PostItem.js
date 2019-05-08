import React, { Component } from 'react';
import * as Constant from './../constants'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CalendarToolbar from './Toolbar';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import BigCalendar from 'react-big-calendar'
import Button from '@material-ui/core/Button';
import Slide from '@material-ui/core/Slide';
import moment from 'moment';
import { Link } from 'react-router-dom';
import 'moment/locale/vi';
import "react-big-calendar/lib/css/react-big-calendar.css";


function Transition(props) {
    return <Slide direction="up" {...props} />;
}


// const views = [
//     'MONTH', 'WEEK' , 'DAY' , 'AGENDA'
// ]
// let allViews = (views).map(k => BigCalendar.Views[k]);
class PostItem extends Component {
    constructor(props) {
        super(props)
        this.myDiv = React.createRef()
        this.state = {
            open: false,
            label: '',
            toRelatedPath: '',
        };
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    componentDidMount() {
        let serviceType = this.props.serviceType;
        let path = '';
        let label = '';
        switch (serviceType) {
            case Constant.TYPE_ALBUM:
                path = Constant.SLUG_ALBUM
                label = "Album"
                break;
            case Constant.TYPE_VIDEO:
                path = Constant.SLUG_VIDEO
                label = "Video"
                break;
        }
        this.setState({
            toRelatedPath: path,
            label:label,
        })
    }

    render() {
        
        var { post,serviceType } = this.props;
        var { toRelatedPath,label } = this.state;

        var formatter = new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
        });
        const localizer = BigCalendar.momentLocalizer(moment);
        var priceDetails = post.priceDetails ? post.priceDetails.map((priceDetail, index) => {
            var date = new Date(Date.parse(priceDetail.applyDate));
            return {
                id: index,
                title: formatter.format(priceDetail.price),
                start: date,
                end: date,
            };
        }) : null;

        return (
            <div className="col-md-10 col-xs-12 ">
                <div className="gla_post_item">
                    <div className="gla_post_title">
                        <h3>{post.name}</h3>
                    </div>
                    <div className="gla_post_info">
                        <strong>Địa điểm: </strong>{post.location}
                    </div>
                    <p>
                        <strong>Thông tin: </strong> {post.description}<br />
                    </p>
                    {/* Content */}
                    <div ref={this.myDiv} dangerouslySetInnerHTML={{ __html: post.priceDescription }} />
                    {/*End Content */}
                    <p />
                    <div className="price-details">
                        <a className="price"><span>{formatter.format(post.price)}</span>
                        </a>
                        <Fab size="small" className="price-more" color="primary" aria-label="Xem thêm giá tham khảo" onClick={this.handleClickOpen} >
                            <AddIcon />
                        </Fab>
                        <div className="pull-right">
                            {(serviceType && serviceType !== Constant.TYPE_FULL_WEDDING_DAY ? <Link to={"/"+toRelatedPath + post.id + "/" + post.slug} className="btn">{label+' tham khảo'}</Link> :null) }
                        </div>
                        
                    </div>
                    <Dialog
                        fullScreen
                        open={this.state.open}
                        onClose={this.handleClose}
                        TransitionComponent={Transition}
                    >
                        <div style={{ overflow: "scroll", padding: '2em', margin: '1em',minWidth:'750px' }}>
                            <BigCalendar
                                events={priceDetails}
                                views={['month', 'week', 'day']}
                                step={60}
                                showMultiDayTimes
                                defaultDate={new Date()}
                                localizer={localizer}
                                culture={"vi"}
                                components={{
                                    toolbar: CalendarToolbar
                                }}
                                onSelectEvent={event => alert(event.title)}
                            />
                        </div>

                        <DialogActions>
                            <Button style={{float:"left"}} variant="contained" size="large" color="primary" onClick={this.handleClose}>Thoát</Button>
                        </DialogActions>
                    </Dialog>

                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default PostItem;
