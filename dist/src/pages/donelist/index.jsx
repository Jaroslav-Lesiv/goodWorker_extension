import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { task } from "../../redux/actions";
import SpeedDial from "../../components/speed_dial";
import { TaskList, DoneTaskItem, Block } from "../../ui";
import Slide from "@material-ui/core/Slide";
import TaskControl from "./control_panel";

const mapStateToProps = ({ task }) => ({
  done_list: task.done_list,
  selected_task: task.done_selected
});

const mapDispatchToProps = {
  taskSelect: task.taskDoneSelect,
  getDoneList: task.getDoneList,
  removeFromDoneTask: task.removeFromDoneTask
};

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export class DonePages extends Component {
  static propTypes = {
    prop: PropTypes
  };

  componentDidMount = () => {
    this.props.getDoneList();
  };

  selectTask = _id => {
    this.props.taskSelect(_id);
  };

  removeFromDoneTask = _id => this.props.removeFromDoneTask(_id)

  render() {
    const { done_list, selected_task } = this.props;
    return (
      <Block align={`flex-start`}>
        <TaskControl type={`done`} list={done_list} selected={selected_task} />
        <Slide direction="left" in={true} mountOnEnter unmountOnExit>
          <TaskList>
            {done_list.map(task => (
              <DoneTaskItem
                key={task.id}
                label={task.label}
                selected={selected_task.includes(task.id)}
                id={task.id}
                onClick={() => this.selectTask(task.id)}
                // onDelete={this.deleteTask(task.id)}
                onRemoveFromDoneTask={() => this.removeFromDoneTask(task.id)}
                description={task.description}
                spend_time={task.spend_time}
                plain_time={task.plain_time}
              />
            ))}
          </TaskList>
        </Slide>

        <SpeedDial />
      </Block>
    );
  }
}

export default DonePages;
