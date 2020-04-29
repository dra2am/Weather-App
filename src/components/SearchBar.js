import React from "react";
import "../css/SearchBar.css";

class SearchBar extends React.Component {
  state = { text: "" };

  onInputChange = event => {
    this.setState({ text: event.target.value });
  };

  //onsubmit takes text and sends it to app so api call can use it
  onFormSubmit = e => {
    e.preventDefault();
    this.props.OnSearchSubmit(this.state.text);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <input
            type='text'
            value={this.state.text}
            onChange={this.onInputChange}
            placeholder='Type a city name...'
          />
        </form>
        <h2>{this.state.text.toUpperCase()} </h2>
      </div>
    );
  }
}

export default SearchBar;
