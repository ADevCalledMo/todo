import React, { Component } from "react";

class Booklist extends Component {
  render() {
    return (
      <div className="book-list">
        <h1>What to read:</h1>
        <ul>
          <li>The Hobit</li>
          <li>Cather in the rye</li>
          <li>Crime & Punushment</li>
        </ul>
      </div>
    );
  }
}

export default Booklist;