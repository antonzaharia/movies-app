import React, { Component } from "react";
import "./styles/App.css";
import { connect } from "react-redux";

import Header from "./components/Header";
import Content from "./components/Content";
import { loadMovies } from "./actions";

class App extends Component {
  componentDidMount() {
    this.props.loadMovies();
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Content movies={this.props.movies} />
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => dispatch(loadMovies()),
});
const mapStateToProps = (state) => ({
  movies: state.movies,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
