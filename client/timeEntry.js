/* eslint-disable react/self-closing-comp */
import React from 'react';
import { connect } from 'react-redux';
import { fetchAllCompanies } from './redux/companies';
import { fetchAllProcesses } from './redux/processes';
import { fetchSingleUser } from './redux/singleUser';

class TimeEntry extends React.Component {
  constructor() {
    super();
    this.addColumn = this.addColumn.bind(this);
    this.addRow = this.addRow.bind(this);
    this.createCell = this.createCell.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.getCompanies();
    this.props.getProcesses();
  }

  createCell(cell, text) {
    const div = document.createElement('div');
    div.appendChild(text);
    cell.appendChild(div);
  }

  addColumn() {
    const tbl = document.getElementById('time-table');
    const select = document.createElement('select');
    const option = document.createElement('option');
    select.setAttribute('name', 'company');
    option.setAttribute('value', 'companies');
    option.innerText = 'Companies';
    select.appendChild(option);
    for (let i = 0; i < tbl.rows.length; i++) {
      if (i === 0) {
        this.createCell(
          tbl.rows[i].insertCell(tbl.rows[i].cells.length),
          select
        );
      } else {
        let input = document.createElement('input');
        this.createCell(
          tbl.rows[i].insertCell(tbl.rows[i].cells.length),
          input
        );
      }
    }
  }

  addRow() {
    const tbl = document.getElementById('time-table');
    const row = tbl.insertRow(tbl.rows.length);
    const select = document.createElement('select');
    const option = document.createElement('option');
    select.setAttribute('name', 'process');
    option.setAttribute('value', 'processes');
    option.innerText = 'Processes';
    select.appendChild(option);
    for (let i = 0; i < tbl.rows[0].cells.length; i++) {
      if (i === 0) {
        this.createCell(row.insertCell(i), select);
      } else {
        let input = document.createElement('input');
        this.createCell(row.insertCell(i), input);
      }
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.addRow}>
          Add Row
        </button>
        <button type="button" onClick={this.addColumn}>
          Add Column
        </button>
        <form onSubmit={this.handleSubmit}>
          <table id="time-table">
            <tbody>
              <tr>
                <td></td>
                <td>
                  <select name="company">
                    <option value="companies">Companies</option>
                    {this.props.companies.map(company => (
                      <option key={company.id} value={company.companyName}>
                        {company.companyName}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
              <tr>
                <td>
                  <select name="process">
                    <option value="processes">Processes</option>
                    {this.props.processes.map(process => (
                      <option key={process.id} value={process.processName}>
                        {process.processName}
                      </option>
                    ))}
                  </select>
                </td>
                <td>
                  <input onChange={this.handleChange} />
                </td>
              </tr>
            </tbody>
          </table>
          <div className="submitbtn">
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    companies: state.companies,
    singleUser: state.singleUser,
    processes: state.processes,
  };
};

const mapDispatchToProps = dispatch => ({
    getCompanies: () => {
      dispatch(fetchAllCompanies())
    },
    getProcesses: () => {
      dispatch(fetchAllProcesses())
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(TimeEntry);
