// eventually this will hold some react router stuff
import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";

// const Header = () => <h2>Header</h2>;
const Dashboard = () => <h2>Dashboard</h2>;

const SurveyNew = () => <h2>SurveyNew</h2>;

const Landing = () => <h2>Landing</h2>;

class App extends Component {
  //life cycle method: after when component mounts 
  componentDidMount() { 
    this.props.fetchUser();
  }
  

  render() {
    return (
      // this container class is required to used materialize css
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            {/* same as exact={true} */}
            <Route path="/" exact component={Landing} />
            <Route path="/surveys" exact component={Dashboard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// actions will be passed to component as props
export default connect(null, actions)(App);
