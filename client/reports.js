/* eslint-disable complexity */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import { connect } from 'react-redux';
import BillboardChart from 'react-billboardjs';
import 'react-billboardjs/lib/billboard.css';
import { fetchActualTime } from './redux/actualTime';

class Reports extends React.Component {
  constructor() {
    super();
    this.state = {
      month: '',
      type: ' ',
    };
    this.handleMonthChange = this.handleMonthChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  componentDidMount() {
    this.props.getActualTime();
  }

  handleTypeChange(event) {
    this.setState({
      type: event.target.value,
    });
  }

  handleMonthChange(event) {
    this.setState({
      month: event.target.value,
    });
  }

  render() {
    const oneMonthCoA = this.props.actualTime
      .filter(entry => entry.week === this.state.month)
      .filter(entry => entry.company === 'Company A')
      .map(entry => entry.time)
      .reduce((accum, currentVal) => {
        return accum + Number(currentVal);
      }, 0);
    const oneMonthCoAArr = ['Company A', oneMonthCoA];

    const oneMonthCoB = this.props.actualTime
      .filter(entry => entry.week === this.state.month)
      .filter(entry => entry.company === 'Company B')
      .map(entry => entry.time)
      .reduce((accum, currentVal) => {
        return accum + Number(currentVal);
      }, 0);
    const oneMonthCoBArr = ['Company B', oneMonthCoB];

    const oneMonthCoC = this.props.actualTime
      .filter(entry => entry.week === this.state.month)
      .filter(entry => entry.company === 'Company C')
      .map(entry => entry.time)
      .reduce((accum, currentVal) => {
        return accum + Number(currentVal);
      }, 0);
    const oneMonthCoCArr = ['Company C', oneMonthCoC];

    const oneMonthCoD = this.props.actualTime
      .filter(entry => entry.week === this.state.month)
      .filter(entry => entry.company === 'Company D')
      .map(entry => entry.time)
      .reduce((accum, currentVal) => {
        return accum + Number(currentVal);
      }, 0);
    const oneMonthCoDArr = ['Company D', oneMonthCoD];

    const CHART_DATA = {
      columns: [oneMonthCoAArr, oneMonthCoBArr, oneMonthCoCArr, oneMonthCoDArr],
      type: this.state.type,
    };

    // const CHART_DATA = {
    //   columns: [
    //     ['Data 1', 4, 6, 1, 8, 9, 3, 4],
    //     ['Data 2', 3, 7, 9, 2, 2, 1, 4],
    //     ['Data 3', 8, 4, 3, 8, 6, 1, 9],
    //     ['Data 4', 3, 4, 4, 2, 7, 3, 1],
    //   ],
    //   type: this.state.type,
    // };

    return (
      <div>
        <div id="selectorsDiv">
          <div className="selectors">
            <select onChange={this.handleMonthChange}>
              <option value="">Select Month...</option>
              <option value="2020-01-10T11:00:00.000Z">January</option>
              <option value="2020-02-07T11:00:00.000Z">February</option>
              <option value="2020-03-06T11:00:00.000Z">March</option>
              <option value="2020-04-03T10:00:00.000Z">April</option>
              <option value="2020-05-01T10:00:00.000Z">May</option>
              <option value="2020-06-05T10:00:00.000Z">June</option>
              <option value="2020-07-03T10:00:00.000Z">July</option>
              <option value="2020-08-07T10:00:00.000Z">August</option>
            </select>
          </div>
          <div className="selectors">
            <select onChange={this.handleTypeChange}>
              <option value=" ">Select Chart Type...</option>
              <option value="bar">Bar</option>
              <option value="donut">Donut</option>
              <option value="pie">Pie Chart</option>
              <option value="line">Line</option>
              <option value="scatter">Scatter Plot</option>
              <option value="area">Area</option>
              <option value="area-spline">Area Spline</option>
              <option value="step">Step</option>
              <option value="area-step">Area Step</option>
            </select>
          </div>
        </div>
        <BillboardChart data={CHART_DATA} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    actualTime: state.actualTime,
  };
};

const mapDispatchToProps = dispatch => ({
  getActualTime: () => {
    dispatch(fetchActualTime());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reports);
