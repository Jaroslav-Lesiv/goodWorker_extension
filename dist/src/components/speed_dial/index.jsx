import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import {Edit, Add, Delete, FilterNone, Save, Done} from "@material-ui/icons";
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import { task } from "../../redux/actions";

const styles = theme => ({
  speedDial: {
    position: "absolute",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  }
});

const mapDispatchToProps = {
  deleteTask: task.deleteTask,
  copyTask: task.copyTask,
  doneTask: task.doneTask
};

const mapStateToProps = ({ task }) => ({
  selected_task: task.selected
})

@connect(
  mapStateToProps,
  mapDispatchToProps
)
class SpeedDialComponent extends React.Component {
  state = {
    open: false,
    hidden: false
  };

  deleteTask = () => this.props.deleteTask(this.props.selected_task)

  copyTask = () => this.props.copyTask()

  handleVisibility = () => {
    this.setState(state => ({
      open: false,
      hidden: !state.hidden
    }));
  };

  handleClick = () => {
    this.setState(state => ({
      open: !state.open
    }));
  };

  handleOpen = () => {
    if (!this.state.hidden) {
      this.setState({
        open: true
      });
    }
  };

  doneTask = () => {
    this.props.doneTask()
  }

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes, selected_task } = this.props;
    const { hidden, open } = this.state;

    return (
      <SpeedDial
        ariaLabel="SpeedDial openIcon example"
        className={classes.speedDial}
        hidden={hidden}
        icon={<SpeedDialIcon openIcon={<Edit />} />}
        // onBlur={this.handleClose}
        onClick={this.handleClick}
        onClose={this.handleClose}
        // onFocus={this.handleOpen}
        // onMouseEnter={this.handleOpen}
        // onMouseLeave={this.handleClose}
        open={open}
      >
          <SpeedDialAction
            key={'Copy'}
            icon={<FilterNone disabled={Boolean(!selected_task.length)} />}
            tooltipTitle={'Copy'}
            onClick={this.copyTask}
          />
          <SpeedDialAction
            key={'Save'}
            icon={<Save />}
            tooltipTitle={'Save'}
            onClick={this.handleClick}
          />
          <SpeedDialAction
            key={'Done'}
            icon={<Done />}
            tooltipTitle={'Done'}
            onClick={this.doneTask}
          />
          <SpeedDialAction
            key={'Add'}
            icon={<Link to={`/create`}><Add /></Link>}
            tooltipTitle={'Add'}
            onClick={this.handleClick}
          />
          <SpeedDialAction
            key={'Delete'}
            icon={<Delete disabled={Boolean(!selected_task.length)} />}
            tooltipTitle={'Delete'}
            onClick={this.deleteTask}
          />
      </SpeedDial>
    );
  }
}

SpeedDialComponent.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SpeedDialComponent);
