import React from 'react';
import Toolbar from 'react-big-calendar/lib/Toolbar';
import "react-big-calendar/lib/css/react-big-calendar.css";
export default class CalendarToolbar extends Toolbar {

	componentDidMount() {
		const view = this.props.view;
	}

	render() {
		const view = this.props.view;
		return (
			<div className="rbc-toolbar" >
				<span className="rbc-btn-group">
					<button type="button" onClick={() => this.navigate('PREV')}>Về trước</button>
					<button type="button" onClick={() => this.navigate('TODAY')}>Hôm nay</button>
					<button type="button" onClick={() => this.navigate('NEXT')}>Tiếp theo</button>
				</span>
				<div className="rbc-toolbar-label">{this.props.label}</div>
				<div className="rbc-btn-group">
					<button type="button"  onClick={this.view.bind(null, 'month')}>Tháng</button>
					{/* <button type="button"  onClick={this.view.bind(null, 'week')}>Tuần</button> */}
					{/* <button type="button"  onClick={this.view.bind(null, 'day')}>Ngày</button> */}
				</div>
			</div>
		);
	}
}