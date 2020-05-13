import React, { Suspense,lazy } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";


import MainNavigation from './shared/components/Navigation/MainHeader'


const Blogs = lazy(() => import("./pages/Blogs"));
const BlogDetail = lazy(() => import("./pages/BlogDetail"));


const App = () => {
  return (
    <Router>
      <MainNavigation />
      <Suspense fallback={<div className="center">Loading...</div>}>
        <Switch>
          <Route path="/" exact>
            <Blogs />
          </Route>
          <Route path="/post/:id" exact>
            <BlogDetail />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default App;
