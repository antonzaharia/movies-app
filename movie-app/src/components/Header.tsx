import React, { Component } from "react";
import "../styles/Header.css";
import { connect } from "react-redux";
import { loadMovies, ascendingOrder, descendingOrder } from "../actions";

import DoneOutlineIcon from "@material-ui/icons/DoneOutline";

interface HeaderProps {
  loadMovies: any;
  ascendingOrder: any;
  descendingOrder: any;
}

interface HeaderState {
  ascending: boolean;
  descending: boolean;
}


class Header extends Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);
    this.state = {
      ascending: false,
      descending: false
    }
  }
  componentWillMount() {
    this.setState({
      ascending: false,
      descending: false
    })
  }
  toggleAscending = () => {
    this.state.ascending
      ? this.props.loadMovies()
      : this.props.ascendingOrder();
    this.setState({ ascending: !this.state.ascending, descending: false });
  };
  toggleDescending = () => {
    this.state.descending
      ? this.props.loadMovies()
      : this.props.descendingOrder();
    this.setState({ descending: !this.state.descending, ascending: false });
  };

  render() {
    return (
      <div className="header">
        <h1 className="logo">MovieApp</h1>
        <div className="buttons-wrap">
          <button className="filter-btn" onClick={this.toggleAscending}>
            Ascending rating order{" "}
            {this.state.ascending ? <DoneOutlineIcon /> : ""}
          </button>
          <button className="filter-btn" onClick={this.toggleDescending}>
            Descending rating order{" "}
            {this.state.descending ? <DoneOutlineIcon /> : ""}
          </button>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch) => ({
  loadMovies: () => dispatch(loadMovies()),
  ascendingOrder: () => dispatch(ascendingOrder()),
  descendingOrder: () => dispatch(descendingOrder()),
});
export default connect(null, mapDispatchToProps)(Header);
