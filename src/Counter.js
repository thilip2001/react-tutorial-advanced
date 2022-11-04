import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props){
        super(props)
        this.state={
            count:0,
        }
    }
    increaseCount=()=>{
        this.setState(state=>({count:state.count+1}))
    }
  render() {
    return (
      <div>
        <p>You clicked {this.state.count}</p>
        <button onClick={this.increaseCount}>Click to Increase</button>
      </div>
    )
  }
}

