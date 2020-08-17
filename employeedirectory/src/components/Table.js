import React from "react";

function Table(props) {

    // let searchTitle = props.employees.filter(employee => employee.title);

    // let searchFirstName = props.employees.filter(employee => employee.firstName);
    
    // let searchLastName = props.employees.filter(employee => employee.lastName);
    
    // let searchLocation = props.employees.filter(employee => employee.location);


    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <div className="card border-secondary mb-3" style={{ maxWidth: 1000 }}>
                    <div className="card-header border-secondary text-center"><b>{props.title}</b></div>
                    <div className="card-body text-secondary">
                        <h5 className="card-title text-center">{props.firstName} {props.lastName}</h5>
                        <p className="card-text"></p>
                    </div>
                    <div className="card-footer border-secondary text-center"><b>{props.location}</b></div>
                </div>
            </div>
            <div className="col-md-3"></div>

        </div>
    );
}

export default Table;
