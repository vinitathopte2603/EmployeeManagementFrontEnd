import React, { Component } from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

 class EmployeeDetails extends Component {

    // state = {
    //     step:1,
    //     id:'',
    //     firstName:'',
    //     email:'',
    //     salary:'',
    //     designation:'',
    //     experience:'',
    //     department:'',
    //     contact:''

    // }
    // nextStep=()=>{
    //     const{step}=this.state;
    //     this.setState({step=step+1});
    // }
    // prevStep=()=>{
    //     const{step}=this.state;
    //     this.setState({step=step-1});
    // }
    // handleChange=input=>e=>{
    //     this.setState({[input]:e.target.value});
    // }
    render() {
        // const{step}=this.state;
        // const{id,firstName,email,salary,designation,experience,department,contact}=this.state;
        // const values={id,firstName,email,salary,designation,experience,department,contact}
        return (
            <div className="header">
                <h1>Employee Management System</h1>
            </div>
        )
    }
}

export default EmployeeDetails
