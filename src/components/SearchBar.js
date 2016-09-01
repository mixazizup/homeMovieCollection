import React, { Component } from 'react';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: null,
        rating: null,
        genre: null,
        actors: [],
        year: null
    };
  }

  _onInputChange(term) {
    this.props.filter({title: term.toLowerCase()});
  }

  render() {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Filter by Title"
          value={this.state.title}
          onChange={event => this._onInputChange(event.target.value)}
        />
        <div className="input-group-btn">
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Options <span className="caret"></span></button>
          <ul className="dropdown-menu dropdown-menu-right">
            <li><a href="#">Year</a></li>
            <li><a href="#">Rating</a></li>
            <li><a href="#">Actors</a></li>
            <li><a href="#">Genre</a></li>
          </ul>
        </div>
      </div>
    );
  }
}
