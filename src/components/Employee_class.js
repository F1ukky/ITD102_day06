import React, { Component } from 'react';
import axios from 'axios';

class Employee_class extends Component {
    constructor(){
        super();
        this.state = {
            data: [],
            message: ""
        }
    };

    componentDidMount = () => {
        this.loadData();
    }
  
  loadData = () => {
    axios.get("http://localhost:5000/api/employee")
    .then(response => {
        this.setState({
            data: response.data
        });
    })
    .catch(err => {
        this.setState({
            message: "No results found!"
        });
    });
  };
  
    render() {
    return (
        <>
            <ul>
                {this.state.data && this.state.data.map(item => (
                    <li key={item.id}>
                        {item.name} { " " } {item.position}
                    </li>
                ))}
            </ul>
        </>
    )
  }
}
export default Employee_class;