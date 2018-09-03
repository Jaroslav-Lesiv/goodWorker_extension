import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { task } from '../../redux/actions'
const getStatistic = (list = []) => {
  const data = {
    success: 0,
    failed: 0,
    check_list_total: 0,
    check_list_done: 0
  }
  for (let task of list) {
    const {plain_time, spend_time, check_list } = task
    if (spend_time > plain_time) {
      ++data.failed
    } else {
      ++data.success
    }
    console.log(task, check_list)
    task.check_list.map( check_item => {
      ++data.check_list_total
      check_item.done && ++data.check_list_done
    } )
  }
  return data
}
const mapStateToProps = ({ task }) => ({
  task_list: task.list,
  done_list: task.done_list,
});

const mapDispatchToProps = {
  getDoneList: task.getDoneList,
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class StatisticPage extends Component {
  static propTypes = {
    prop: PropTypes
  }
  componentDidMount = () => {
    this.props.getDoneList();
  };
  render() {
    const { done_list } = this.props
    return (
      <div>
          Statistic page
        <div>Succesful</div>
        <div>{JSON.stringify(getStatistic(done_list), null, 2)}</div>
        <div>Failed</div>
      </div>
    )
  }
}
