import React, { Component } from "react";
import { CardList } from "../../components/CardList/cardList";

import jsonData from "../../utils/data.json";
import NavBar from "../../components/Navbar/navbar";

class HomePage extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }
  componentDidMount() {
    let users = jsonData[1].user;
    this.setState({ users: users });
  }

  render() {
    console.log(this.state.users);
    return (
      <div>
        <NavBar />
        <CardList users={this.state.users} />
      </div>
    );
  }
}

export default HomePage;
