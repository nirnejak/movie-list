import React from "react"
import ReactDOM from "react-dom"

import { Route, BrowserRouter as Router, Switch } from "react-router-dom"

import Movies from "./pages/Movies"
import MovieDetails from "./pages/MovieDetails"

import "./index.scss"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/movies/:id" exact component={MovieDetails} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
