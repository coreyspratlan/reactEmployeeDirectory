import React from "react";
// import Jumbotron from "jumbotron"
// import "./style.css";

function Form1(props) {
    // Setting the component's initial state





    // Preventing the default behavior of the form submit (which is to refresh the page)



    //const searchTitle = props.employees.filter(employee => employee.title);


    return (

        <div className="jumbotron text-center">
            <h1 className="display-4"><b>EMPLOYEE DIRECTORY</b></h1>
            <p className="lead"> </p>
            <hr className="my-4" />

            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6" align="center">

                    <input className="form-control"
        
                        name="firstName"
                        onChange={props.handleInputChange}
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
        
                        name="lastName"
                        onChange={props.handleInputChange}
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
        
                        name="title"
                        onChange={props.handleInputChange}
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
                        
                        name="location"
                        onChange={props.handleInputChange}
                        type="text"
                        placeholder="Location"
                    />
                </div>
                <div className="col-md-3"></div>
            </div>
            <br />
        </div>
    );
}


export default Form1;