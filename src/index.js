import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./styles.css";

const Notes = ({ notes }) => (
  <div>
    <p>NOTES:</p>
    {notes.map(note => (
      <Link to={`/notes/${note.id}`}>
        <div>
          {note.title}
          <br />
          {note.note}
          <br /> <br />
        </div>
      </Link>
    ))}
  </div>
);

const Note = props => {
  const note = props.notes.find(
    note => note.id == props.match.params.dynamicId
  );
  return (
    <div>
      <p>INDIVIDUAL NOTE:</p>
      {note.title}
      <br />
      {note.note}
    </div>
  );
};

class App extends React.Component {
  state = {
    notes: [
      {
        id: 0,
        title: "note 0 title",
        note: "I am the very model"
      },
      {
        id: 1,
        title: "note 1 title",
        note: "of a modern major general"
      },
      {
        id: 2,
        title: "note 2 title",
        note: "i've information animal"
      },
      {
        id: 3,
        title: "note 3 title",
        note: "vegetable and mineral"
      }
    ]
  };

  render() {
    return (
      <div>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <Link to="/">Home</Link>
          &emsp;
          <Link to="/add">Add Link</Link>
          &emsp;
          <Link to="/notes">Notes</Link>
        </div>
        <Route
          exact
          path="/"
          render={() => (
            <div> MAIN PAGE: Welcome, click a link above to get started! </div>
          )}
        />
        <Route
          exact
          path="/add"
          render={() => <div> ADD NOTES (no functionality) </div>}
        />
        <Route
          exact
          path="/notes"
          render={() => <Notes notes={this.state.notes} />}
        />
        <Route
          exact
          path="/notes/:dynamicId"
          render={props => (
            <Note match={props.match} notes={this.state.notes} />
          )}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  rootElement
);

// how props from React Router looks passed from render (with only the match object)
const routerProps = {
  match: {
    params: {
      dynamicId: 2 /* some num */
    }
  }
};
