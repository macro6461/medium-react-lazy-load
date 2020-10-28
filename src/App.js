import React, {lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
const EnglishOne = lazy(()=>import('./components/EnglishOne'));
const EnglishTwo =lazy(()=>import('./components/EnglishTwo'));
const MathOne = lazy(()=>import('./components/MathOne'));
const MathTwo = lazy(()=>import('./components/MathTwo'))

function App() {

  return (
    <div className="App">
      <Router>
      <ul>
          <li>
            <Link to="/english-1">English One</Link>
          </li>
          <li>
            <Link to="/english-2">English Two</Link>
          </li>
          <li>
            <Link to="/math-1">Math One</Link>
          </li>
          <li>
            <Link to="/math-2">Math Two</Link>
          </li>
        </ul>
        <Suspense fallback={<div>Loading...</div>}>
          <Route 
          exact path="/english-1" 
          component={EnglishOne}
          />
          <Route 
          exact path="/english-2" 
          component={EnglishTwo}
          />
          <Route 
          exact path="/math-1" 
          component={MathOne}
          />
          <Route 
          exact path="/math-2" 
          component={MathTwo}
          />
        </Suspense>
      </Router>
      
    </div>
  );
}

export default App;
