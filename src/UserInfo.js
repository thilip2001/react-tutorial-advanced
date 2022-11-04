import React, { Component } from "react";

export class userInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data });
      });
  }

  render() {
    return (
      <div className="user">
        <h2>User Info</h2>
        <p >
          Name : {this.state.user.name}
        </p>
        <p >
          Email : {this.state.user.email}
        </p>
      </div>
    );
  }
}

export default userInfo;
