import React, { Component } from "react";
// import Jumbotron from "jumbotron"
// import "./style.css";

class Form extends Component {
    // Setting the component's initial state
    state = {
        firstName: "",
        lastName: "",
        title: "",
        location: ""
    };

    handleInputChange = event => {
        // Getting the value and name of the input which triggered the change
        let value = event.target.value;
        const name = event.target.name;

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
                <h1 className="display-4">EMPLOYEE DIRECTORY</h1>
                <p className="lead"> </p>
                <hr className="my-4" />

                {/* <p>
                    {this.state.firstName} {this.state.lastName}
                </p> */}
                <form>
                    <input
                        value={this.state.firstName}
                        name="firstName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="First Name"
                    />
                    <br />
                    <br />

                    <input
                        value={this.state.lastName}
                        name="lastName"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Last Name"
                    />
                    <br />
                    <br />

                    <input
                        value={this.state.title}
                        name="title"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Title"
                    />
                    <br />
                    <br />

                    <input
                        value={this.state.location}
                        name="location"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="Location"
                    />
                    <br />
                    <br />


                </form>
                <button onClick={this.handleFormSubmit}>Submit</button>
            </div>

        );
    }
}

export default Form;