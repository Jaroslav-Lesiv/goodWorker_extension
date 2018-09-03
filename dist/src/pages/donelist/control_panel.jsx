import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { task } from "../../redux/actions";
import {  Block, Checkbox } from "../../ui";
import { Typography } from "@material-ui/core";
import FormControlLabel from "@material-ui/core/FormControlLabel";
// import Checkbox from "@material-ui/core/Checkbox";

const mapDispatchToProps = {
  selectAll: task.selectAll,
  selectAllDone: task.selectAllDone,
  unselectAll: task.unselectAll,
  unselectAllDone: task.unselectAllDone
};

@connect(
  null,
  mapDispatchToProps
)
export class TaskControl extends Component {
  static propTypes = {
    prop: PropTypes
  };

  selectAll = () => {
    const { type } = this.props
    type === 'done' ? this.props.selectAllDone() : this.props.selectAll()
  }

  unselectAll = () => {
    const { type } = this.props
    type === 'done' ? this.props.unselectAllDone() : this.props.unselectAll()

  }

  render() {
    const { list, selected, } = this.props;
    const selectedAll = selected.length === list.length
    return (
      <Block align={`center`} justify={`space-between`}>
        
        

        <FormControlLabel
          control={
            <Checkbox
              checked={selectedAll}
              onChange={
                selectedAll
                  ? this.unselectAll
                  : this.selectAll
              }
              value="checkedAll"
            />
          }
          label={selectedAll ? `Remove All` : `Select All`}
        />


        {selected.length > 0 ? (
          <Typography>Selected {selected.length}</Typography>
        ) : null}
      </Block>
    );
  }
}

export default TaskControl;
