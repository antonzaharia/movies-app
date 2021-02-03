import React, { Component } from "react";
import "./styles/App.css";
import { connect } from "react-redux";

import Header from "./components/Header";
import Content from "./components/Content";
import { loadMovies } from "./actions";
import Loading from "./components/Loading";

class App extends Component {
  componentDidMount() {
    this.props.loadMovies();
  }
  render() {
    return (
      <div className="App">
        <Header />

        {this.props.loading ? <Loading /> : ""}
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
  loading: state.loading,
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
