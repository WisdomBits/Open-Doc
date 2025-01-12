import TextEditor from "./Components/TextEditor";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';
function App() {
  return (<>
  <Router>
    <Switch>
      <Route exact path="/">
        <Redirect to={`/documents/${uuidv4()}`} />
      </Route>
      <Route path="/documents/:id">
        <TextEditor />
      </Route>
    </Switch>
  </Router>
  </>);
}

export default App;
