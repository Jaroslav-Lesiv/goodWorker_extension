import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Block, Input, ButtonUI, BlockForm } from "../../ui";
import { validate } from "../../helper";
import { connect } from "react-redux";
import { user } from "../../redux/actions";
import { Email, AccountCircle } from "@material-ui/icons";
const mapDispatchToProps = {
  userSet: user.userSet
};

@connect(
  null,
  mapDispatchToProps
)
export default class Login extends Component {
  state = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    errors: {}
  };
  submit = event => {
    event.preventDefault();
    const { first_name, last_name, username, email } = this.state;
    if (
      validate({ first_name, last_name, username, email }, errors =>
        this.setState({ errors: { ...errors } })
      )
    ) {
      this.props.userSet({ first_name, last_name, username, email });
    }
  };

  handleChangeInput = name => event => {
    const { value } = event.target;
    this.setState(state => ({
      errors: { ...state.errors, [name]: null },
      [name]: value
    }));
  };

  render() {
    const { first_name, last_name, username, email, errors } = this.state;
    return (
      <BlockForm
        onSubmit={this.submit}
        direction={"column"}
        align={"center"}
        justify={"flex-start"}
        style={{ width: "100%" }}
      >
        <Input
          type="text"
          error={errors.first_name}
          helperText={`Some hepler text`}
          placeholder="Enter your Firstname"
          value={first_name}
          onChange={this.handleChangeInput("first_name")}
          icon={<AccountCircle />}
        />
        <Input
          type="text"
          error={errors.last_name}
          placeholder="Enter your Lastname"
          value={last_name}
          onChange={this.handleChangeInput("last_name")}
          icon={<AccountCircle />}
        />
        <Input
          type="text"
          error={errors.username}
          placeholder="Enter your Username"
          value={username}
          onChange={this.handleChangeInput("username")}
          icon={<AccountCircle />}
        />
        <Input
          type="email"
          icon={<Email />}
          error={errors.email}
          placeholder="Enter your Email"
          value={email}
          onChange={this.handleChangeInput("email")}
        />

        <ButtonUI type={`submit`}>Log in</ButtonUI>
      </BlockForm>
    );
  }
}
