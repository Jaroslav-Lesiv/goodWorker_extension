import React, { Component } from "react";
import { app, task } from "./redux/actions";
import { Application, Wrapper, Main } from "./ui";
import { RootRouter, UserRouter } from "./router";
import { withRouter } from "react-router";
import './initStyle'
import { connect } from "react-redux";
import Header from "./common/header";
import Navigation from "./common/navigation";

const mapStateToProps = ({ app, user }) => ({
  isOpen: app.isOpen,
  isLogin: user.isLogin
});

const mapDispatchToProps = {
  open: app.open,
  openConvert: app.openConvert,
  updateActiveTask: task.updateActiveTask,
};
@withRouter
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class App extends Component {


  componentDidMount = async () => {
    try {
      window.chrome.runtime.onMessage.addListener(
        (request, sender, sendResponse) => {
          switch (request.cmd) {
            case "open":
              this.props.open(request.data);
              break;
            case "toggleOpen":
              this.props.open(!this.props.isOpen);
              sendResponse(true);
              break;
            case "openConvert":
              this.props.openConvert(request.data);
              sendResponse(true);
              break;
            case "update_active_task":
              this.props.updateActiveTask(request.data);
              sendResponse(true);
              break

            default:
              break;
          }
        }
      );
    } catch (error) {
      console.warn(error);
    }
  };
  render() {
    const { isOpen, isLogin } = this.props;

    return (
      <Application isOpen={isOpen}>
        <Wrapper>
          <Header />
          <Main>
            {isLogin ? <UserRouter /> : <RootRouter /> }
           
          </Main>
        </Wrapper>
      </Application>
    );
  }
}

export default App;
