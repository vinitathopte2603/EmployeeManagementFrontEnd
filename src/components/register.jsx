import React, { Component } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import HideAppBar from '../components/title'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { EmpService } from '../service/employeeservice'

var getdata = new EmpService()

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      salary: '',
      designation: '',
      experience: '',
      department: '',
      contactNumber: ''
    };
    this.register = this.register.bind(this)
    this.onchange = this.onchange.bind(this);
  }
  register() {
    // console.log(this.state);
    var data = {

      name: this.state.name,
      email: this.state.email,
      salary: this.state.salary,
      designation: this.state.designation,
      experience: this.state.experience,
      department: this.state.department,
      contactNumber: this.state.contactNumber,

    }

    getdata.addUserData(data).then(response => {
      console.log(" response in ", response);
      this.props.history.push('/home')

    })
  }

  onchange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }
  render() {
    return (
      <div className="demo1">
        <div>
          <HideAppBar></HideAppBar>
        </div>
        <Card className="card" style={{ width: "45%", height: "100%" }} >

          <form noValidate autoComplete="off"  style={{width: "100%"}}>
            {/* <div className="demo"> */}

            <div className="spacing" >
              <TextField id="outlined-basic" label="Name" name="name" onChange={this.onchange} />
              <TextField id="outlined-basic" label="Email" name="email" onChange={this.onchange} />
            </div>
             <div className="spacing">
              <TextField id="outlined-basic" label="Salary" name="salary" onChange={this.onchange} />
              <TextField id="outlined-basic" label="Designation" name="designation" onChange={this.onchange} />
            </div>
            <div className="spacing">
              <TextField id="outlined-basic" label="Experience" name="experience" onChange={this.onchange} />
              <TextField id="outlined-basic" label="Department" name="department" onChange={this.onchange} />
            </div>
            <div className="spacing">
              <TextField id="outlined-basic" label="Contact" name="contactNumber" onChange={this.onchange} />
            </div> 
            <div className="addbutton">
            <Button variant="contained" color="primary" onClick={this.register}>Add</Button>
            </div>
            {/* </div> */}
          </form>
        </Card>
      </div>

    )
  }
}

export default Register