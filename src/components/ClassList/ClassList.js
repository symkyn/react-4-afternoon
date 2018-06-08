import React, { Component } from 'react';
import axios from 'axios';

export default class ClassList extends Component {
  constructor() {
    super()
    
    this.state={
      students: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:3005/students?class=${this.props.match.params.class}`)
      .then(results => 
        this.setState({
          students: results.data
        }))
      .catch(err => console.warn(err))
  }

  render() {
    const studentArray = this.state.students.map((e,i) =>
        <h3 key={`student ${i}`}>{e.first_name} {e.last_name}</h3>
    )
    return (
      <div className="box">
        <h1>{this.props.match.params.class}</h1>
        <h2>ClassList:</h2>
        { studentArray }
      </div>
    )
  }
}