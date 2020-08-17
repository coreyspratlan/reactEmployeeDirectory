import React, { Component } from "react";
// import Jumbotron from "jumbotron"
// import "./style.css";

class Form1 extends Component {
    // Setting the component's initial state
    state = {
        title: "",
        firstName: "",
        lastName: "",
        location: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        const { name, value } = event.target;


        // Updating the input's state
        this.setState({
            [name]: value
        });
    };


    handleFormSubmit = event => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        event.preventDefault();


        this.setState({
            firstName: "",
            lastName: "",
            title: "",
            location: ""
        });
    };


    render() {

   
        
        return (

            <div className="jumbotron text-center">
                <h1 className="display-4"><b>EMPLOYEE DIRECTORY</b></h1>
                <p className="lead"> </p>
                <hr className="my-4" />

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6" align="center">

                        <input className="form-control"
                            value={this.state.firstName}
                            name="firstName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="First Name"
                        />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <br />

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6" align="center">

                        <input className="form-control"
                            value={this.state.lastName}
                            name="lastName"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Last Name"
                        />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <br />

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6" align="center">

                        <input className="form-control"
                            value={this.state.title}
                            name="title"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Title"
                        />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <br />

                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6" align="center">

                        <input className="form-control"
                            value={this.state.location}
                            name="location"
                            onChange={this.handleInputChange}
                            type="text"
                            placeholder="Location"
                        />
                    </div>
                    <div className="col-md-3"></div>
                </div>
                <br />
                <button onClick={this.handleFormSubmit} type="button" className="btn btn-dark">Filter Search</button>
            </div>
        );
    }
}

export default Form1;