import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import "./dashboard.css";

class Dashboardcontainer extends Component {
   
    constructor(props) {
      super(props) 
      this.state = { 
         students: [
            { 
              id: 1, 
              name: 'test1', 
              age: 11,
              gender: "male", 
              email: 'test1@gmail.com',
              phoneNo:"9191919191"
            },
            { id: 2,
            name: "test2",
            age: 12,
            gender: "male",
            email: "test2@gmail.com",
            phoneNo: "9292929292"
         },
         {
            id: 3,
            name: "test3",
            age: 13,
            gender: "male",
            email: "test3@gmail.com",
            phoneNo: "9393939393"
        
         }
            
         ]
      }
   }

  

   renderTableHeader() {
    let header = Object.keys(this.state.students[0])
    return header.map((key, index) => {
       return <th key={index}>{key.toUpperCase()}</th>
    })
 }


   renderTableData() {
    return this.state.students.map((student, index) => {
       const { id, name, age,gender, email,phoneNo} = student;
       return (
          <tr key={id}>
             <td>{id}</td>
             <td>{name}</td>
             <td>{age}</td>
             <td>{gender}</td>
             <td>{email}</td>
             <td>{phoneNo}</td>
          </tr>
       )
    })
 }


 render() {
    return (
       <div>
          <h1 id='title'>User Dashboard</h1>
         
          <table id='students'>
             <tbody>
             <tr>{this.renderTableHeader()}</tr>
              {this.renderTableData()}
             </tbody>
          </table>

          <button className="logoutBtn">Logout</button>
       </div>
    )
 }
}

Dashboardcontainer.propTypes = {
   history: PropTypes.shape({
      push : PropTypes.func.isRequired
  }).isRequired
};
export default withRouter(Dashboardcontainer);