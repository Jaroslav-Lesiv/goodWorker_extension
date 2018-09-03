import React, { Component } from "react";
import { task } from "../../redux/actions";
import Slide from "@material-ui/core/Slide";
import {
  Block,
  Input,
  ButtonUI,
  BlockForm,
  TimeInput,
  InputOuter,
  TextArea,
  CheckListInput
} from "../../ui";
import { validate, toSeconds } from "../../helper";
import { connect } from "react-redux";

import { Label, Description, Timer, Add, Clear } from "@material-ui/icons";
import { Checkbox } from "material-ui";

const mapDispatchToProps = {
  updateTask: task.updateTask,
  getTask: task.getTask,
  clearCurrent: task.clearCurrent
};

const mapStateToProps = ({ task }) => ({
  current: task.current
});

@connect(
  mapStateToProps,
  mapDispatchToProps
)
export default class EditTaskPage extends Component {
  state = {
    errors: {},
    label: "",
    description: "",
    hour: 0,
    minutes: 0,
    check_list: [],
    check_item: ""
  };

  componentDidMount = () => {
    this.getCurrentTask();
  };

  getCurrentTask = () => {
    const { id } = this.props.match.params;
    this.props.getTask(id);
  };

  componentWillReceiveProps = ({ current }) => {
    if (current && typeof current === 'object'  && current.id !== this.props.current.id) {
      alert('update')
      this.setState({
        ...current,
        hour: Math.floor((current.plain_time / (60 * 60)) % 24),
        minutes: Math.floor((current.plain_time / 60) % 60)
      });
    }
  };

  componentWillUnmount = () => {
    this.props.clearCurrent()
  }

  createCheckItem = () => {
    this.setState(state => ({
      check_list: [
        ...state.check_list,
        {
          id: +new Date(),
          label: state.check_item,
          done: false
        }
      ],
      check_item: ""
    }));
  };

  handleChangeInput = name => event => {
    const { value } = event.target;
    this.setState(state => ({
      errors: { ...state.errors, [name]: null },
      [name]: value
    }));
  };

  clearData = () => {
    this.setState({
      errors: {},
      label: "",
      description: "",
      hour: 0,
      minutes: 0,
      check_item: "",
      check_list: []
    });
  };

  submit = event => {
    event.preventDefault();
    const { label, description, hour, minutes, check_list, id } = this.state;
    if (
      validate({ label, description, hour, minutes }, errors =>
        this.setState({ errors: { ...errors } })
      )
    ) {
      const data = {
        ...this.state,
        plain_time: toSeconds(hour, "hour") + toSeconds(minutes, "minutes"),
        
      };
      this.props.updateTask(data);
      this.clearData();
      this.props.history.push("/");
    }
  };

  clearCheckListForm = () => this.setState({ check_item: "" });

  toogleCheckListItem = id => {
    const { check_list } = this.state;
    const _check_list = [...check_list];
    const item_idx = check_list.findIndex(_item => _item.id === id);

    _check_list[item_idx] = {
      ..._check_list[item_idx],
      done: !_check_list[item_idx].done
    };
    this.setState({ check_list: _check_list });
  };

  changeCreatedtask = id => event => {
    const { check_list } = this.state;
    const _check_list = [...check_list];
    const item_idx = check_list.find(_item => _item.id === id);
    _check_list[item_idx] = {
      ..._check_list[item_idx],
      label: event.target.value
    };
    this.setState({ check_list: _check_list });
  };

  removeCheckListItem = id =>
    this.setState(state => ({
      check_list: state.check_list.filter(item => item.id !== id)
    }));
  render() {
    const {
      errors,
      label,
      description,
      hour,
      minutes,
      check_list,
      check_item
    } = this.state;
    console.log(this.props)
    return (
      <Slide direction="right" in={true} mountOnEnter unmountOnExit>
        <Block>
          <BlockForm
            onSubmit={this.submit}
            direction={"column"}
            align={"center"}
            justify={"flex-start"}
            style={{ width: "100%", height: "auto" }}
          >
            <InputOuter
              inputProps={{
                type: "text",
                value: label,
                onChange: this.handleChangeInput("label"),
                placeholder: "Enter task labek",
                autoFocus: true
              }}
              error={errors.label}
              icon={<Label />}
            />

            <InputOuter
              type={"textarea"}
              inputProps={{
                type: "text",
                value: description,
                onChange: this.handleChangeInput("description"),
                placeholder: "Enter description",
                rows: 7,
                maxLength: 512
              }}
              error={errors.description}
              icon={<Description />}
            />

            <Block justify={`center`} align={`flex-start`} grow={`initial`}>
              {check_list.map(_check_item => (
                <CheckListInput
                  key={_check_item.id}
                  inputProps={{
                    type: "check_item",
                    value: _check_item.label,
                    onChange: this.changeCreatedtask(_check_item.id)
                  }}
                  icon={
                    <Checkbox
                      checked={_check_item.done}
                      onClick={() => this.toogleCheckListItem(_check_item.id)}
                    />
                  }
                  iconAfter={
                    <Clear
                      onClick={() => this.removeCheckListItem(_check_item.id)}
                    />
                  }
                />
              ))}
              {/* <form onSubmit={this.createCheckItem}> */}
              <CheckListInput
                inputProps={{
                  type: "check_item",
                  value: check_item,
                  onChange: this.handleChangeInput("check_item"),
                  placeholder: "Enter check item"
                }}
                error={errors.label}
                icon={<Add onClick={this.createCheckItem} />}
                iconAfter={<Clear onClick={this.clearCheckListForm} />}
              />
              {/* </form> */}
            </Block>

            <Block justify={`center`} align={`flex-start`} grow={`initial`}>
              <TimeInput
                error={errors.hour}
                placeholder="Hours"
                value={hour}
                helperText={`Hours`}
                onChange={this.handleChangeInput("hour")}
                icon={<Timer />}
              />

              <TimeInput
                error={errors.minutes}
                placeholder="Hours"
                value={minutes}
                helperText={`Minutes`}
                onChange={this.handleChangeInput("minutes")}
                icon={<Timer />}
              />
            </Block>

            <ButtonUI type={`submit`}>Edit task</ButtonUI>
          </BlockForm>
        </Block>
      </Slide>
    );
  }
}
