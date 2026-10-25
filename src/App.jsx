import { Component } from "react";
import Loading from "./views/Loading";
import Init from "./views/Init";
import StoriesHandler from "./views/StoriesHandler";
import DataBase from "./dataBase";
import WritePractice from "./views/WritePractice";
import StoryRegister from "./views/StoryRegister";

class App extends Component {
  constructor(props) {
    super(props);
    this.dataBase = new DataBase();
    this.stories = [];

    this.ventanas = {
      // init
      loading: () => <Loading />,
      init: () => (
        <Init
          change={(w, fun) => this.putViewCarga(w, fun)}
          dataBase={this.dataBase}
        />
      ),

      storyRegister: () => (
        <StoryRegister
          change={(w, fun) => this.putViewCarga(w, fun)}
          dataBase={this.dataBase}
        />
      ),

      storiesHandler: () => (
        <StoriesHandler
          change={(w, fun) => this.putViewCarga(w, fun)}
          dataBase={this.dataBase}
        />
      ),

      writePractice: () => (
        <WritePractice
          change={(w, fun) => this.putViewCarga(w, fun)}
          dataBase={this.dataBase}
        />
      ),
    };

    this.state = {
      view: "init",
    };
  }

  setWindow(window) {
    this.setState({
      view: window,
    });
  }

  putViewCarga(window, fun) {
    if (window) this.setWindow(window);
    else {
      const crView = this.state.view;

      this.setState({ view: "loading" });
      fun((window2) => {
        setTimeout(() => {
          this.setWindow(window2 || crView);
        }, 300);
      });
    }
  }

  render() {
    return this.ventanas[this.state.view]();
  }
}

export default App;
