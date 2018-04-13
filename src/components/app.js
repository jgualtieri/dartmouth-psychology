import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SelectPage from '../containers/select_page';
import ImagePage from '../containers/image_page';
import LikedPage from '../containers/liked_page';
import ResponsesPage from '../containers/responses_page';


const App = (props) => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={SelectPage} />
        <Route exact path="/images" component={ImagePage} />
        <Route exact path="/liked" component={LikedPage} />
        <Route exact path="/responses" component={ResponsesPage} />
        <Route render={() => (<div>page not found</div>)} />
      </Switch>
    </Router>
  );
};

export default App;
