import React, { Component } from "react";
// import React from 'react';
import './App.css';
// import Header from "./components/Header";
import Form1 from "./components/Form1";
import Table from "./components/Table";
import employees from "./employees.json";

// import Jumbotron from "./components/Jumbotron";



// function App() {

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    allEmployees: employees,
    filteredEmployees: employees
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    const  filteredEmployees = this.state.allEmployees.filter(employee => employee[name].includes(value))
    // Updating the input's state
    this.setState({
       filteredEmployees
    });
};

  render() {
    return (

      <div>
        {/* {this.state.employees.filter(employee => ( */}
          <Form1 
            handleInputChange={this.handleInputChange}
          
          
          />

       
        {this.state.filteredEmployees.map(employee => (
          <Table
            employees = {employees}
            id={employee.id}
            key={employee.id}
            title={employee.title}
            firstName={employee.firstName}
            lastName={employee.lastName}
            location={employee.location}
          />
        ))}
      </div>


    );
  }
}

export default App;
