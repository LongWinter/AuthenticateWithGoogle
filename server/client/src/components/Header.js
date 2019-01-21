import React, { Component } from "react";

// make a class based component that will contain a state
// the difference between functional component and class based component is that functional component only has props which are immutable
// whereas class component can hold state informations and change them

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a className="left brand-logo">Ye's page</a>

          <ul className="right ">
            <li>
              <a>Login with Google</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
