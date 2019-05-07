import React, { Component } from 'react';
import { axios_fetch_AboutUsDetails } from './axios_call';
import { connect } from 'react-redux';

class Appointment extends Component {
  componentDidMount() {
    this.props.fetchAboutUsDetails();
}
  render() {
    var { aboutUsDetails } = this.props;
    let email =  (aboutUsDetails && aboutUsDetails.email) ? aboutUsDetails.email:'';
    return (
      <section className="gla_section">
        <div className="container text-center">
          <h3 className="gla_subtitle">Đặt lịch hẹn</h3>
          <div className="row">
            <div className="col-md-8 col-md-push-2">
              <form action={"https://formspree.io/"+ email} method="POST">
                <div className="row">
                  <div className="col-md-6">
                    <label>Họ và tên*</label>
                    <input type="text" name="name" className="form-control form-opacity" />
                  </div>
                  <div className="col-md-6">
                    <label>Địa chỉ*</label>
                    <input type="text" name="email" className="form-control form-opacity" />
                  </div>
                  <div className="col-md-6">
                    <label>Email*</label>
                    <input type="text" name="email" className="form-control form-opacity" />
                  </div>
                  <div className="col-md-6">
                    <label>Số điện thoại*</label>
                    <input type="text" name="email" className="form-control form-opacity" />
                  </div>
                  <div className="col-md-12">
                    <label>Notes</label>
                    <textarea name="message" className="form-control form-opacity" defaultValue={""} />
                  </div>
                  <div className="col-md-12">
                    <input type="submit" className="btn submit" defaultValue="Send" />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
      aboutUsDetails: state.homePage.aboutUsDetails
  }
}
const mapDispatchToProps = (dispatch, props) => {
  return {
      fetchAboutUsDetails: () => {
          dispatch(axios_fetch_AboutUsDetails());
      },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointment);