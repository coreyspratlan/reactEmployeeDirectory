import React from "react";

function Table() {
    return (
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
<div className="card border-secondary mb-3" style={{maxWidth: 600}}>
  <div className="card-header border-secondary text-center"><b>Title</b></div>
  <div className="card-body text-secondary">
    <h5 className="card-title text-center">First Name - Last Name</h5>
    <p className="card-text"></p>
  </div>
  <div className="card-footer border-secondary text-center"><b>Location</b></div>
</div>
</div>
<div className="col-md-3"></div>

</div>
  );
}

export default Table;


/* <div>
<table>
<tr>
    <th>First Name</th>
    <th>Last Name</th>
    <th>Title</th>
    <th>Location</th>
</tr>
<tr>
    <td>Jeff</td>
    <td>Judd</td>
    <td>Manager</td>
    <td>Austin</td>
</tr>
</table>
</div > */