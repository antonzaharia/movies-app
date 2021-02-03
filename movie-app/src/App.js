import React, { Component } from "react";
import "./styles/App.css";
import { connect } from "react-redux";

import Header from "./components/Header";
import { loadMovies } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.loadMovies();
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => dispatch(loadMovies()),
});
export default connect(null, mapDispatchToProps)(App);
